    "use client";
    import React, { useEffect, useState } from "react";
    import {
    MediaRenderer,
    ThirdwebNftMedia,
    useAddress,
    useWallet,
    } from "@thirdweb-dev/react";
    import Container from "../../../../components/Container/Container";
    import { NFT, ThirdwebSDK } from "@thirdweb-dev/sdk";
    import { activeChain, nftDropAddress } from "../../../../constants";
    import styles from "../../../../styles/Token.module.css";
    import { Toaster } from "react-hot-toast";
    import { Signer } from "ethers";
    import newSmartWallet from "../../../../components/SmartWallet/SmartWallet";
    import SmartWalletConnected from "../../../../components/SmartWallet/smartConnected";
    import { useParams } from 'next/navigation';

    export default function TokenPage() {
    const [nft, setNft] = useState<NFT | null>(null);
    const [contractMetadata, setContractMetadata] = useState<any>(null);
    const [smartWalletAddress, setSmartWalletAddress] = useState<string | null>(null);
    const [signer, setSigner] = useState<Signer>();

    const address = useAddress();
    const wallet = useWallet();
    const params = useParams();

    const tokenId  = params.token;
    console.log(tokenId);

    console.log(nft,params);
  
    useEffect(() => {

      const fetchNftData = async () => {
        if (!tokenId) return;
  
        const sdk = new ThirdwebSDK(activeChain);
        const contract = await sdk.getContract(nftDropAddress);

        try {
            const fetchedNft = await contract.erc721.get(tokenId.toString());
            setNft(fetchedNft);
            const metadata = await contract.metadata.get();
            setContractMetadata(metadata);
        } catch (error) {
            console.error("Error fetching NFT data:", error);
        }
        };
  
      fetchNftData();
    }, [params?.isReady, params?.token]);


    // create a smart wallet for the NFT
    useEffect(() => {
        const createSmartWallet = async (nft: NFT | null) => {
        if (nft && smartWalletAddress == null && address && wallet) {
            const smartWallet = newSmartWallet(nft);
            console.log("personal wallet", address);
            await smartWallet.connect({
            personalWallet: wallet,
            });
            setSigner(await smartWallet.getSigner());
            console.log("signer", signer);
            setSmartWalletAddress(await smartWallet.getAddress());
            console.log("smart wallet address", await smartWallet.getAddress());
            return smartWallet;
        } else {
            console.log("smart wallet not created");
        }
        };
        createSmartWallet(nft);
    }, [nft, smartWalletAddress, address, wallet]);

    return (
        <>
        <Toaster position="bottom-center" reverseOrder={false} />
        { nft && 
        <Container maxWidth="lg">
            <div className={styles.container}>
            <div className={styles.metadataContainer}>
                <ThirdwebNftMedia
                    metadata={nft?.metadata}
                    className={styles.image}
                />
                </div>
    
                <div className={styles.listingContainer}>
                {contractMetadata && (
                    <div className={styles.contractMetadataContainer}>
                    <MediaRenderer
                        src={contractMetadata.image}
                        className={styles.collectionImage}
                    />
                    <p className={styles.collectionName}>{contractMetadata.name}</p>
                    </div>
                )}
                <h1 className={styles.title}>{nft?.metadata.name}</h1>
                <p className={styles.collectionName}>Token ID #{nft?.metadata.id}</p>
                <p>Your {nft.metadata.name} address is {smartWalletAddress}</p>
                {smartWalletAddress ? (
                    <SmartWalletConnected signer={signer} />
                ) : (
                    <div className={styles.btnContainer}>
                    <p>Loading...</p>
                    </div>
                )}
                </div>
            </div>
        </Container>
    }
        </>
    );
    }


