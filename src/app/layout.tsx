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
    blockExplorerUrls: ["https://hashscan.io/testnet"],
    chainId: 296,
    chainName: "Hedera Testnet",
    iconUrls: ["https://cryptologos.cc/logos/hedera-hbar-logo.png"],
    name: "Hedera Testnet",
    nativeCurrency: {
      decimals: 18,
      name: "HBAR",
      symbol: "HBAR",
    },
    networkId: 296,
    rpcUrls: ["https://testnet.hashio.io/api"],

    vanityName: "Hedera Testnet",
  },
  {
    blockExplorerUrls: ["https://evm-testnet.flowscan.io"],
    chainId: 545,
    chainName: "Flow Testnet",
    iconUrls: ["https://cryptologos.cc/logos/flow-flow-logo.png"],
    name: "Hedera Testnet",
    nativeCurrency: {
      decimals: 18,
      name: "FLOW",
      symbol: "FLOW",
    },
    networkId: 545,
    rpcUrls: ["https://testnet.evm.nodes.onflow.org"],

    vanityName: "Flow Testnet",
  },
  {
    blockExplorerUrls: ["https://explorer-holesky.morphl2.io/"],
    chainId: 2810,
    chainName: "Morph Holesky",
    iconUrls: ["https://cryptologos.cc/logos/flow-flow-logo.png"],
    name: "Morph Holesky",
    nativeCurrency: {
      decimals: 18,
      name: "ETH",
      symbol: "ETH",
    },
    networkId: 2810,
    rpcUrls: ["https://rpc-quicknode-holesky.morphl2.io"],

    vanityName: "Morph Holesky",
  },
  {
    "blockExplorerUrls": ["https://explorer.sepolia.linea.build/"],
    "chainId": 59141,
    "chainName": "Linea Sepolia",
    "iconUrls": ["https://cryptologos.cc/logos/ethereum-eth-logo.png"],
    "name": "Linea Sepolia",
    "nativeCurrency": {
      "decimals": 18,
      "name": "ETH",
      "symbol": "ETH"
    },
    "networkId": 59141,
    "rpcUrls": ["https://rpc.sepolia.linea.build"],
    "vanityName": "Linea Sepolia"
  },
  {
    // rootstock testnet
    blockExplorerUrls: ["https://explorer.testnet.rsk.co/"],
    chainId: 31,
    chainName: "RSK Testnet",
    iconUrls: ["https://cryptologos.cc/logos/rsk-rsk-logo.png"],
    name: "RSK Testnet",
    nativeCurrency: {
      decimals: 18,
      name: "RBTC",
      symbol: "RBTC",
    },
    networkId: 31,
    rpcUrls: ["https://public-node.testnet.rsk.co"],
    vanityName: "RSK Testnet",
  },
  // airdao testnet
  {
    blockExplorerUrls: ["https://explorer.airdao.io/"],
    chainId: 22040,
    chainName: "Airdao Testnet",
    iconUrls: ["https://cryptologos.cc/logos/ethereum-eth-logo.png"],
    name: "Airdao Testnet",
    nativeCurrency: {
      decimals: 18,
      name: "ETH",
      symbol: "ETH",
    },
    networkId: 22040,
    rpcUrls: ["https://network.ambrosus-test.io	"],
    vanityName: "Airdao Testnet",
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
