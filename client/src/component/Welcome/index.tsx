import { useState } from "react";
import { Container, Button, Title, Text, Grid } from "@mantine/core";

import SendTransaction from "./SendTransaction";
import { useTransactionContext } from "context/transaction-context";

export const Welcome = () => {
    const { connectWallet, currentAccount, appLoaded } = useTransactionContext();
    const [connectingAccount, setConnectingAccount] = useState<boolean>(false);

    const handleConnectWallet = async () => {
        setConnectingAccount(true);
        connectWallet();
        setConnectingAccount(false);
    }

    return (
        <Container size="xl">
            <Grid align="center">
                <Grid.Col
                    lg={6}
                    sm={12}
                    sx={(theme) => ({ 
                        paddingBlock: "150px",
                        [theme.fn.smallerThan("md")]: {
                            paddingBlock: "50px"
                        }
                    })}
                >
                    <Title order={1} fz="42px" color="dimmed">Send crypto accross the world!</Title>
                    <Text color="dimmed" mb="20px">Explore the crypto world. Buy and sell crypto-currencies from here.</Text>
                    {
                        appLoaded && !currentAccount ?
                            <Button
                                loading={connectingAccount}
                                onClick={handleConnectWallet}
                                size="xl"
                                sx={{
                                    borderRadius: "12px"
                                }}
                            >
                                Connect your wallet
                            </Button> : null
                    }
                </Grid.Col>
                <Grid.Col lg={6} sm={12}>
                    <SendTransaction />
                </Grid.Col>
            </Grid>
        </Container>
    );
}