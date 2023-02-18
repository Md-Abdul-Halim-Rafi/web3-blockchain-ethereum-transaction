import { Flex, Title } from "@mantine/core";
import { EthereumIcon, InfoIcon } from "assets/icons";
import { useTransactionContext } from "context/transaction-context";

const EthereumCard = () => {
    const { currentAccount } = useTransactionContext();
    return (
        <Flex
            sx={{
                width: "100%",
                maxWidth: "400px",
                aspectRatio: "16 / 9",
                borderRadius: "12px",
                backgroundColor: "#110F19",
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
            }}
            direction="column"
            align="flex-start"
            justify="space-between"
            p="md"
        >
            <Flex align="flex-start" justify="space-between" w="100%">
                <Flex
                    align="center"
                    justify="center"
                    sx={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "100px",
                        border: "1px solid #fff",
                    }}
                >
                    <EthereumIcon />
                </Flex>
                <InfoIcon />
            </Flex>
            <Flex direction="column">
                <Title order={6} sx={{ overflowWrap: "anywhere" }}>
                    {
                        currentAccount || "Address"
                    }
                </Title>
                <Title order={2} fw="500">Ethereum</Title>
            </Flex>
        </Flex>
    );
}

export default EthereumCard;