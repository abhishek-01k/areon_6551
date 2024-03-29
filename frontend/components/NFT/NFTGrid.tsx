import type { NFT as NFTType } from "@thirdweb-dev/sdk";
import Link from "next/link";
import React from "react";
import { nftDropAddress } from "../../constants";
import Skeleton from "../Skeleton/Skeleton";
import NFT from "./NFT";
import styles from "../../styles/Main.module.css";
import { cn } from "@/lib/utils";

type Props = {
  isLoading: boolean;
  nfts: NFTType[] | undefined;
  overrideOnclickBehavior?: (nft: NFTType) => void;
  emptyText?: string;
};

// NFTGrid component shows a grid of the connected wallet's owned NFTs.
export default function NFTGrid({
  isLoading,
  nfts,
  emptyText = "No owned NFTS.",
}: Props) {
  return (
    <div className={styles.nftGridContainer}>
      {isLoading ? (
        [...Array(5)].map((_, index) => (
          <div key={index} className={styles.nftContainer}>
            <Skeleton key={index} width={"100%"} height="312px" />
          </div>
        ))
      ) : nfts && nfts.length > 0 ? (
        nfts.map((nft) => (
          <div
            // href={`/token/${nftDropAddress}/${nft.metadata.id}`}
            key={nft.metadata.id}
            className={cn(styles.nftContainer, "border-2")}
          >
            <NFT nft={nft} />
          </div>
        ))
      ) : (
        <p>{emptyText}</p>
      )}
    </div>
  );
}
