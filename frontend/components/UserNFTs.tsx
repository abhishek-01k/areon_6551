"use client";
import type { NextPage } from "next";
import styles from "../styles/Main.module.css";
import NFTGrid from "../components/NFT/NFTGrid";
import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContract,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import { nftDropAddress } from "../constants";
import Container from "../components/Container/Container";
import toast from "react-hot-toast";
import { toastStyle } from "@/lib/utils";

/**
 * The home page of the application.
 */
const UserNFTs = () => {
  const address = useAddress();
  const { contract: nftDropContract } = useContract(nftDropAddress, "nft-drop");
  const { data: nfts, isLoading } = useOwnedNFTs(nftDropContract, address);

  return (
    <Container maxWidth="lg">
      {address ? (
        <div className={styles.container}>
          <h1>Your NFTs</h1>
          <p>
            Browse the NFTs inside your personal wallet, select one to connect a
            token bound smart wallet & view it&apos;s balance.
          </p>
          <NFTGrid
            nfts={nfts}
            isLoading={isLoading}
            emptyText={
              "Looks like you don't own any NFTs. Did you import your contract on the thirdweb dashboard? https://thirdweb.com/dashboard"
            }
          />
        </div>
      ) : (
        <div className={styles.container}>
          <h2>Connect a personal wallet to view your owned NFTs</h2>
          <ConnectWallet />
        </div>
      )}
    </Container>
  );
};

export default UserNFTs;
