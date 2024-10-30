// app/layout.js or pages/_app.js (depending on your Next.js version)
import type { Metadata } from "next";
import { Inter, Balsamiq_Sans, Galindo } from "next/font/google";
import "./globals.css";

// Load Inter, Balsamiq Sans, and Galindo fonts
const inter = Inter({ subsets: ["latin"] });
const balsamiqSans = Balsamiq_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-balsamiq",
});

const galindo = Galindo({
  subsets: ["latin"],
  variable: "--font-galindo",
  weight: "400",
});

import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "./providers";
import Navbar from "@/components/navigation/navbar";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";


export const metadata: Metadata = {
  title: "Play Network",
  description: "Powered by Dynamic",
};

const evmNetworks = [
  {
    blockExplorerUrls: ["https://sepolia.etherscan.io/"],
    chainId: 11155111,
    chainName: "Ethereum Sepolia",
    iconUrls: ["https://app.dynamic.xyz/assets/networks/eth.svg"],
    name: "Ethereum Sepolia",
    nativeCurrency: {
      decimals: 18,
      name: "Ether",
      symbol: "ETH",
    },
    networkId: 11155111,
    rpcUrls: ["https://rpc2.sepolia.org"],

    vanityName: "Sepolia",
  },
  {
    blockExplorerUrls: ["https://aurorascan.dev"],
    chainId: 1313161554,
    chainName: "Aurora",
    iconUrls: ["https://app.dynamic.xyz/assets/networks/aurora.svg"],
    name: "Aurora",
    nativeCurrency: {
      name: "Aurora",
      symbol: "AUR",
      decimals: 18,
    },
    networkId: 1313161554,
    rpcUrls: ["https://mainnet.aurora.dev"],
    vanityName: "Aurora",
  },
  {
    blockExplorerUrls: ["https://testnet.aurorascan.dev"],
    chainId: 131316155,
    chainName: "Aurora Testnet",
    iconUrls: ["https://app.dynamic.xyz/assets/networks/aurora.svg"],
    name: "Aurora Testnet",
    nativeCurrency: {
      name: "Aurora",
      symbol: "AUR",
      decimals: 18,
    },
    networkId: 1313161555,
    rpcUrls: ["https://testnet.aurora.dev"],
    vanityName: "Aurora Testnet",
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en" className={`${balsamiqSans.variable} ${galindo.variable}`}>
      <body className={`${inter.className} font-balsamiq`}>
        <DynamicContextProvider
          theme="dark"
          settings={{
            overrides: { evmNetworks },
            environmentId: "231ff154-802c-44fc-8226-b39d5f3413b7",
            walletConnectors: [EthereumWalletConnectors],
          }}
        >
          {/* <Web3ModalProvider initialState={initialState}> */}
          <Navbar />
          {children}
          {/* </Web3ModalProvider> */}
        </DynamicContextProvider>
      </body>
    </html>
  );
}
