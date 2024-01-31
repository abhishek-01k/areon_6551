import { ThirdwebNftMedia } from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import React, { useState } from "react";
import styles from "./NFT.module.css";
import AddressLabel from "../AddressLabel";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { nftDropAddress } from "@/constants";
import Link from "next/link";

type Props = {
  nft: NFT;
};

// Each NFT component shows the NFT image, name, and token ID.
export default function NFTComponent({ nft }: Props) {
  console.log("NFt >>>", nft);
  const [isReadMoreShown, setIsReadMoreShown] = useState(false);
  const toggleReadMore = () => {
    setIsReadMoreShown(prevState => !prevState);
  };

  const text = nft.metadata.description;

  if (text && text.length <= 50) {
    return <span>{text}</span>;
  }

  return (
    <div>
      <ThirdwebNftMedia metadata={nft.metadata} className={styles.nftImage} />

      <div>
        <p className={styles.nftTokenId}>Token ID #{nft.metadata.id}</p>
        <p className="my-4 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-xl font-extrabold leading-tight tracking-tighter text-transparent md:text-3xl">
          {nft.metadata.name}
        </p>

        <span className="">
          {isReadMoreShown ? text : `${text?.substring(0, 150)}...`}
          <button className="ml-2 cursor-pointer text-[18px] text-gray-400 hover:underline" onClick={toggleReadMore}>
            {isReadMoreShown ? 'Read Less' : 'Read More'}
          </button>
        </span>

        <div className="my-4 mt-8 flex flex-row items-center justify-between">
          <p className=" bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-xl font-extrabold leading-tight tracking-tighter text-transparent md:text-3xl">Owner</p>
          <div className=" flex w-fit flex-row rounded-lg border border-gray-400 px-2 py-1 ">
            <AddressLabel address={nft.owner} showBlockExplorerLink />
          </div>
        </div>

        <Link href={`/token/${nftDropAddress}/${nft.metadata.id}`}>
          <Button className="my-4 w-full">
            Get Your Token Bound Account
          </Button>
        </Link>



      </div>


    </div>
  );
}
