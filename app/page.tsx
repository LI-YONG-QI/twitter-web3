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
      walletConnectProjectId: "123",
    })
  );
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <main className="flex justify-center">
          <Navigator />
          <Home />
          <Sidebar />
        </main>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
