/* eslint-disable react/no-children-prop */
"use client"
import Image from "next/image";
import {
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { useMemo } from "react";
import { CDEXWalletAdapter } from "../packages/cdexWalletAdaptor/cdexAdaptor";
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {
  const wallets = useMemo(
    () => [

      new CDEXWalletAdapter({
        title: "NEW SOL DAPP",
        theme: "dark"
      }),
    ],
    []
  );
  return (
    <>
      <div className="flex justify-center items-center h-16 w-full"></div>
      <WalletProvider wallets={wallets} autoConnect children={undefined} >
        <WalletModalProvider>
          <WalletMultiButton className="bg-gray-800 text-white py-2 px-4 rounded m-2 hover:bg-gray-700" />
          <WalletDisconnectButton className="bg-gray-800 text-white py-2 px-4 rounded m-2 hover:bg-gray-700" />
        </WalletModalProvider>
      </WalletProvider >
      <div />
    </>
  );
}
