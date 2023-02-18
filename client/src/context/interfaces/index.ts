import { BigNumber } from "ethers";

export interface TransactionContextProps {
    transactions: any[];
    transactionCount: number;
    appLoaded: boolean;
    currentAccount: string | null;
    connectWallet: () => void;
    getEthereumContract: () => Contract;
}

export interface TransactionProviderProps {
    children: React.ReactNode;
}

export interface Contract {
    provider?: Object;
    signer?: Object;
    contract?: {
        addToBlockchain: (
            addressTo: string,
            amount: BigNumber,
            keyword: string,
            message: string
        ) => Promise<{
            wait: () => Promise<void>;
        }>;
        getTransactionCount: () => Promise<string>;
    };
}