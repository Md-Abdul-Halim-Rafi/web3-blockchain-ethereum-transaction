import { useState } from "react";
import { Container, Flex, Space, ActionIcon, Button, NavLink, Drawer, useMantineTheme } from "@mantine/core";

import { Logo } from "assets/logo";
import { MenuIcon } from "assets/icons";

import "./index.scss";

export const Navbar = () => {
    const theme = useMantineTheme();

    const [opened, setOpened] = useState<boolean>(false);

    return (
        <nav className="navbar">
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                title="Menu"
                padding="xl"
                position="right"
                overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                overlayOpacity={0.55}
                overlayBlur={3}
                transition="pop-top-right"
                transitionDuration={250}
                transitionTimingFunction="ease"
            >
                Drawer content
            </Drawer>
            <Container size="xl" sx={{ height: "100%" }}>
                <Flex align="center" sx={{ height: "100%" }}>
                    <NavLink
                        sx={{
                            width: "fit-content",
                            borderRadius: "6px",
                            "&:hover": {
                                backgroundColor: "transparent"
                            }
                        }}
                        icon={<Logo />}
                        component="a"
                        href="/"
                    />

                    <Flex
                        justify="flex-end"
                        align="center"
                        sx={(theme) => ({
                            width: "100%",
                            [theme.fn.smallerThan("md")]: {
                                display: "none"
                            }
                        })}
                    >
                        <NavLink
                            label="Services"
                            sx={{
                                width: "fit-content",
                                borderRadius: "6px",
                            }}
                            component="a"
                            href="/services"
                        />
                        <Space w="20px" />
                        <NavLink
                            label="Transactions"
                            sx={{
                                width: "fit-content",
                                borderRadius: "6px"
                            }}
                            component="a"
                            href="/transactions"
                        />
                        <Space w="20px" />
                        <Button
                            variant="filled"
                            sx={{ borderRadius: "12px" }}
                        >
                            Login
                        </Button>
                    </Flex>

                    <Flex
                        justify="flex-end"
                        align="center"
                        sx={(theme) => ({
                            width: "100%",
                            [theme.fn.largerThan("md")]: {
                                display: "none"
                            }
                        })}
                    >
                        <ActionIcon size="lg" onClick={() => setOpened((prev) => !prev)}>
                            <MenuIcon />
                        </ActionIcon>
                    </Flex>
                </Flex>
            </Container>
        </nav>
    );
};