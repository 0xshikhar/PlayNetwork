import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage, http } from "wagmi";
import {
    sepolia,
    aurora,
    auroraTestnet
} from "wagmi/chains";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
if (!projectId) throw new Error("Project ID is not defined");

export const metadata = {
    name: "appkit-example-app",
    description: "AppKit Example",
    url: "http://localhost:3000/verifier",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
const chains = [auroraTestnet, sepolia, aurora] as const;

export const config = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
    auth: {
        email: true, // default to true
        socials: ["github", "google", "x", "discord", "apple"],
        // showWallets: true, // default to true
        // walletFeatures: true, // default to true
    },
    ssr: true,
    storage: createStorage({
        storage: cookieStorage,
    }),
    transports: {
        [sepolia.id]: http(),
    },
});

// 'use client';

// // import * as React from 'react';
// // import '@rainbow-me/rainbowkit/styles.css';

// // import {
// //     getDefaultConfig,
// //     RainbowKitProvider,
// //     connectorsForWallets,
// //     getDefaultWallets,
// // } from '@rainbow-me/rainbowkit';
// // import {
// //     argentWallet,
// //     trustWallet,
// //     ledgerWallet,
// // } from '@rainbow-me/rainbowkit/wallets';
// // import { WagmiProvider } from 'wagmi';
// // import {
// //     QueryClientProvider,
// //     QueryClient,
// // } from "@tanstack/react-query";
// // import 'dotenv/config'

// // import {
// //     mainnet,
// //     polygon,
// //     optimism,
// //     arbitrum,
// // } from 'wagmi/chains';
// // // import { publicProvider } from 'wagmi/providers/public';
// // // import { alchemyProvider } from "wagmi/providers/alchemy";


// // const config = getDefaultConfig({
// //     appName: 'PlayNetwork App',
// //     projectId: 'YOUR_PROJECT_ID',
// //     chains: [mainnet, polygon, optimism, arbitrum],
// //     ssr: true, // If your dApp uses server side rendering (SSR)
// // });

// // const projectId = '9811958bd307518b364ff7178034c435';


// // // const connectors = connectorsForWallets([
// // //     ...wallets,
// // //     {
// // //         groupName: 'Other',
// // //         wallets: [
// // //             argentWallet({ projectId, chains }),
// // //             trustWallet({ projectId, chains }),
// // //             ledgerWallet({ projectId, chains }),
// // //         ],
// // //     },
// // // ]);
// // const { wallets } = getDefaultWallets({
// //     appName: 'RainbowKit demo',
// //     projectId,
// // });

// // const demoAppInfo = {
// //     appName: 'My Wallet Demo',
// // };

// // const queryClient = new QueryClient();

// // export function Providers({ children }: { children: React.ReactNode }) {
// //     console.log("wallet", process.env.WALLET_CONNECT_PROJECT_ID)
// //     const [mounted, setMounted] = React.useState(false);
// //     React.useEffect(() => setMounted(true), []);
// //     return (
// //         <WagmiProvider config={config}>
// //             <QueryClientProvider client={queryClient}>
// //                 <RainbowKitProvider appInfo={demoAppInfo}>
// //                     {mounted && children}
// //                 </RainbowKitProvider>
// //             </QueryClientProvider>
// //         </WagmiProvider>
// //     );
// // }
// import {
//     DynamicContextProvider,
//     DynamicWidget,
// } from "@dynamic-labs/sdk-react-core";
// import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
// import {
//     createConfig,
//     WagmiProvider,
// } from 'wagmi';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { http } from 'viem';
// import { mainnet } from 'viem/chains';

// import { BitcoinWalletConnectors } from "@dynamic-labs/bitcoin";
// import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
// import { FlowWalletConnectors } from "@dynamic-labs/flow";
// import { type ReactNode } from "react";

// const config = createConfig({
//     chains: [mainnet],
//     multiInjectedProviderDiscovery: false,
//     transports: {
//         [mainnet.id]: http(),
//     },
// });

// const queryClient = new QueryClient();

// export function Providers(props: { children: ReactNode }) {
//     return (
//         <DynamicContextProvider
//             settings={{
//                 // Find your environment id at https://app.dynamic.xyz/dashboard/developer
//                 environmentId: "231ff154-802c-44fc-8226-b39d5f3413b7",
//                 walletConnectors: [
//                     BitcoinWalletConnectors,
//                     EthereumWalletConnectors,
//                     FlowWalletConnectors
//                 ],
//             }}
//         >
//             <WagmiProvider config={config}>
//                 <QueryClientProvider client={queryClient}>
//                     <DynamicWagmiConnector>
//                         <DynamicWidget />
//                     </DynamicWagmiConnector>
//                 </QueryClientProvider>
//             </WagmiProvider>
//         </DynamicContextProvider>
//     );
// };