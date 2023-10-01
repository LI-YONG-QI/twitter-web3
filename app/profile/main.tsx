import React from "react";

import { useAccount, useContractWrite } from "wagmi";
import { ABI } from "@/utils/constants";
import { useSIWE } from "connectkit";

const Main = () => {
  const { address } = useAccount();
  const { signOut } = useSIWE();

  const { write } = useContractWrite({
    address: "0xAEEcFB3Ac97d7aC6Df121fAb3a63D925b5830877",
    abi: ABI,
    functionName: "mint",
    args: [address, 100],
  });

  return (
    <div>
      <button className="block mx-auto px-4 py-2 rounded bg-slate-200">
        Mint Coin
      </button>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};

export default Main;
