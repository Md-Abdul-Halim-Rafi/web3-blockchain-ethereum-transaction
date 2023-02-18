import { MantineProvider } from "@mantine/core";

import { Navbar, Transactions, Welcome } from "component";

import { TransactionProvider } from "context/transaction-context";

function App() {

	return (
		<MantineProvider 
			withGlobalStyles 
			withNormalizeCSS
			theme={{
				colorScheme: "dark",
				black: "#0f0e13",
				globalStyles(theme) {
					return {
						body: {
							backgroundColor: "transparent",
							color: theme.white,
						}
					}
				},
			}}
		>
			<TransactionProvider>
				<Navbar />
				<main style={{ marginTop: "120px" }}>
					<Welcome />
					<Transactions />
				</main>
			</TransactionProvider>
		</MantineProvider>
	)
}

export default App
