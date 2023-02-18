import { Flex } from "@mantine/core";

import EthereumCard from "./EthereumCard";
import TransactionForm from "./TransactionForm";

const SendTransaction = () => {

    return (
        <Flex align="center" direction="column">
            <EthereumCard />
            <TransactionForm />
        </Flex>
    );
}

export default SendTransaction;