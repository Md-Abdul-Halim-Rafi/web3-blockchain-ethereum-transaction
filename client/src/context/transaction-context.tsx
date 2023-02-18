import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractAddress, transactionsABI } from "utils/consts";
import { Contract, TransactionContextProps, TransactionProviderProps } from "./interfaces";

export const TransactionContext = createContext<TransactionContextProps>({
    transactionCount: 0,
    transactions: [],
    appLoaded: false,
    currentAccount: null,
    connectWallet: () => {},
    getEthereumContract: () : Contract => ({}),
});

const getEthereumContract = () : Contract => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    const contract: Contract = new ethers.Contract(contractAddress, transactionsABI, signer);
    return contract;
}

export const TransactionProvider = (props: TransactionProviderProps) => {
    const [appLoaded, setAppLoaded] = useState<boolean>(false);
    const [currentAccount, setCurrentAccount] = useState<string>("");

    useEffect(() => {
        const checkIfWalletIsConnected = async () => {
            setAppLoaded(false);
            const { ethereum } = window;
            if (!ethereum) {
                alert("Make sure you have metamask!");
                setAppLoaded(true);
                return;
            }
    
            const accounts = await ethereum.request({ method: "eth_accounts" });
            if (accounts.length > 0) setCurrentAccount(accounts[0]);
            console.log("Found an authorized account:", accounts);
            setAppLoaded(true);
        }

        checkIfWalletIsConnected();
    }, []);

    const connectWallet = async () => {

        try {
            const { ethereum } = window;
            if (!ethereum) {
                alert("Get metamask!");
                return;
            }

            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            if (accounts.length > 0) setCurrentAccount(accounts[0]);
            console.log("Connected", accounts[0]);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <TransactionContext.Provider
            value={{
                transactionCount: 0,
                transactions: [],
                connectWallet,
                currentAccount,
                appLoaded,
                getEthereumContract,
            }}
        >
            {props.children}
        </TransactionContext.Provider>
    );
}

export const useTransactionContext = () => useContext(TransactionContext);