"use client"
import React from 'react';
import Container from '@/components/Container/Container';
import NFTGrid from '@/components/NFT/NFTGrid';
import { nftDropAddress } from '@/constants';
import { ConnectWallet, useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react';
import styles from "../../styles/Main.module.css";


const NFTPage = () => {
    const address = useAddress();
    const { contract: nftDropContract } = useContract(nftDropAddress, "nft-drop");
    const { data: nfts, isLoading } = useOwnedNFTs(nftDropContract, address);

    console.log("Contract >>>>>>>>", nftDropContract, nfts, isLoading)


    return (
        <div className='m-[4rem]'>
            {address ? (
                <div className={styles.container}>
                    <h1 className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-4xl font-extrabold leading-tight tracking-tighter text-transparent md:text-8xl">
                        Your NFTs
                    </h1>
                    <p className='mb-12 mt-2 text-[20px]'>
                        Browse the NFTs inside your personal wallet, select one to connect a
                        token bound smart wallet & view it&apos;s balance.
                    </p>
                    <NFTGrid
                        nfts={nfts}
                        isLoading={isLoading}
                        emptyText={
                            "Looks like you don't own any NFTs. "
                        }
                    />
                </div>
            ) : (
                <div className={styles.container}>
                    <h2>Connect a personal wallet to view your owned NFTs</h2>
                    <ConnectWallet />
                </div>
            )}
        </div>
    );
};

export default NFTPage;