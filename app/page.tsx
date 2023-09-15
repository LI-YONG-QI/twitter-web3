"use client";
import Navigator from "./components/navigator";
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import { goerli } from "viem/chains";
import { WagmiConfig, createConfig } from "wagmi";
import { getDefaultConfig, ConnectKitProvider } from "connectkit";

export default function App() {
  const chains = [goerli];

  const config = createConfig(
    getDefaultConfig({
      appName: "Twitter Web3",
      chains,
      autoConnect: true,
      walletConnectProjectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
      alchemyId: process.env.NEXT_PUBLIC_RPC_KEY || "",
    })
  );
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <div className="flex justify-center">
          <Navigator />
          <Home />
          <Sidebar />
        </div>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
