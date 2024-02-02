import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button';
import RevNFTs from 'assets/RevNFTs.png';
import storyNFT from 'assets/storyNFT.png';
import nftDash from 'assets/nftdashborad.png';
import dashboardNFT from 'assets/dashboardNFT.png';
import Image from 'next/image';
import Link from 'next/link';

const HomeCard = () => {
    return (
        <div className='flex flex-row justify-between gap-4'>
            <Card className='flex flex-1 flex-col'>
                <CardHeader className='flex flex-col gap-2'>
                    <CardTitle>Connect NFT and Own Assets</CardTitle>
                    <CardDescription>Link up with your Areon NFTs and own other assets like ARC20, ARC721, etc. Make your onchain history with your NFTs.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Image src={nftDash} alt='Rev NFTs' />
                </CardContent>
                <CardFooter>
                    <Button className='bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-700 hover:text-white'>Connect your NFT</Button>
                </CardFooter>
            </Card>

            <Card className='flex flex-1 flex-col'>
                <CardHeader className='flex flex-col gap-2'>
                    <CardTitle>View your NFTs assets</CardTitle>
                    <CardDescription>Innovative and Attractive Interface for your NFTs and display the information contained within an NFTs token-bound account.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Image src={dashboardNFT} alt='Dashboard NFTs' />
                </CardContent>
                <CardFooter>
                    <Link href='/nfts'>
                        <Button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-700 hover:text-white'>
                            View Your Assets
                        </Button>
                    </Link>
                </CardFooter>
            </Card>


            <Card className='flex flex-1 flex-col'>
                <CardHeader className='flex flex-col gap-2'>
                    <CardTitle>Interact with Areon Metaverse</CardTitle>
                    <CardDescription>Now, each NFT has the capability to possess its unique story, paving the way for more intricate narratives and endless possibilities on the Areon Metaverse.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Image src={storyNFT} alt='Story NFTs' />
                </CardContent>
                <CardFooter>
                    <Button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-gray-700 hover:text-white'>Start Storytelling</Button>
                </CardFooter>
            </Card>

        </div>
    );
};

export default HomeCard;