"use client";
import React from "react";
import { goerli } from "viem/chains";
import { WagmiConfig, createConfig } from "wagmi";
import {
  getDefaultConfig,
  ConnectKitProvider,
  SIWEProvider,
  SIWEConfig,
} from "connectkit";

import { SiweMessage } from "siwe";
import Navigator from "@/components/navigator";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const BACKEND = "http://localhost:3030";
  const chains = [goerli];

  const siweConfig: SIWEConfig = {
    getNonce: async () => {
      const res = await fetch(`${BACKEND}/siwe/nonce`, {
        credentials: "include",
      });

      const nonce = await res.text();

      return nonce;
    },

    createMessage: ({ nonce, address, chainId }) =>
      new SiweMessage({
        version: "1",
        domain: window.location.host,
        uri: window.location.origin,
        address,
        chainId,
        nonce,
        // Human-readable ASCII assertion that the user will sign, and it must not contain `\n`.
        statement: "Sign in With Ethereum.",
      }).prepareMessage(),

    verifyMessage: async ({ message, signature }) => {
      const res = await fetch(`${BACKEND}/siwe/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ message, signature }),
      });

      return res.ok;
    },

    getSession: async () => {
      const res = await fetch(`${BACKEND}/siwe/session`, {
        method: "GET",
        credentials: "include",
      });
      return res.ok ? res.json() : null;
    },

    signOut: async () => {
      const res = await fetch(`${BACKEND}/siwe/logout`, {
        method: "DELETE",
        credentials: "include",
      });
      return res.status === 200;
    },
  };

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
      <SIWEProvider {...siweConfig}>
        <ConnectKitProvider>
          <div className="grid grid-layout">
            <Navigator />
            {children}
          </div>
        </ConnectKitProvider>
      </SIWEProvider>
    </WagmiConfig>
  );
};

export default Provider;
