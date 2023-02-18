import { Button, Flex, TextInput, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useTransactionContext } from "context/transaction-context";
import { ethers } from "ethers";
import { useState } from "react";

interface TransactionFormData {
    addressTo: string;
    amount: number;
    keywords: string;
    message: string;
}

const TransactionForm = () => {

    const { getEthereumContract, currentAccount } = useTransactionContext();
    const form = useForm({
        initialValues: {
            addressTo: "",
            amount: 0.0001,
            keywords: "",
            message: "",
        } as TransactionFormData,
    });

    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (values: TransactionFormData) => {
        const { ethereum } = window;
        if (!ethereum) {
            alert("Make sure you have metamask!");
            return;
        }

        setLoading(true);

        try {
            const contract = getEthereumContract();

            const { addressTo, amount, keywords, message } = values;

            const parsedAmount = ethers.utils.parseEther(amount.toString());

            await ethereum.request({
                method: "eth_sendTransaction",
                params: [
                    {
                        from: currentAccount,
                        to: addressTo,
                        gas: "0x5208",
                        value: parsedAmount._hex,
                    }
                ]
            });

            const transactionHash = await contract.contract?.
                addToBlockchain(addressTo, parsedAmount, keywords, message);

            await transactionHash?.wait();

            const transactionCount = await contract.contract?.getTransactionCount();
            window.localStorage.setItem("transactionCount", transactionCount?.toString() ?? "-1");

            console.log(values);
        } catch (err) {
            console.error(err);
        }

        setLoading(false);
    }

    return (
        <form
            onSubmit={form.onSubmit((values: TransactionFormData) => handleSubmit(values))}
            style={{ width: "100%", maxWidth: "550px" }}
        >
            <Flex
                bg="#12121C70"
                p="xl"
                mt="md"
                align="center"
                direction="column"
                sx={{ borderRadius: "12px", gap: "20px" }}
            >
                <TextInput
                    withAsterisk
                    placeholder="Address to"
                    w="100%"
                    sx={{
                        "input": {
                            borderRadius: "6px",
                            paddingBlock: "20px",
                        }
                    }}
                    {...form.getInputProps("addressTo")}
                />
                <NumberInput
                    withAsterisk
                    placeholder="Amount (ETH)"
                    w="100%"
                    defaultValue={0.0001}
                    min={0.0001}
                    step={0.0001}
                    precision={4}
                    sx={{
                        "input": {
                            borderRadius: "6px",
                            paddingBlock: "20px",
                        }
                    }}
                    {...form.getInputProps("amount")}
                />
                <TextInput
                    withAsterisk
                    placeholder="Keywords"
                    w="100%"
                    sx={{
                        "input": {
                            borderRadius: "6px",
                            paddingBlock: "20px",
                        }
                    }}
                    {...form.getInputProps("keywords")}
                />
                <TextInput
                    withAsterisk
                    placeholder="Message"
                    w="100%"
                    sx={{
                        "input": {
                            borderRadius: "6px",
                            paddingBlock: "20px",
                        }
                    }}
                    {...form.getInputProps("message")}
                />

                <Button
                    fullWidth
                    size="md"
                    type="submit"
                    variant="filled"
                    loading={loading}
                    sx={{ borderRadius: "6px" }}
                >
                    Send Now
                </Button>
            </Flex>
        </form>
    );
}

export default TransactionForm;