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

const HomeCard = () => {
    return (
        <div className='flex flex-row justify-between gap-4'>
            <Card className='flex flex-1 flex-col'>
                <CardHeader className='flex flex-col gap-2'>
                    <CardTitle>Connect NFT and Own Assets</CardTitle>
                    <CardDescription>Link up with your Areon NFTs and own other assets like ARC20, ARC721, etc. Make your onchain history with your NFTs.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <Button>Connect your NFT</Button>
                </CardFooter>
            </Card>

            <Card className='flex flex-1 flex-col'>
                <CardHeader className='flex flex-col gap-2'>
                    <CardTitle>View your NFTs assets</CardTitle>
                    <CardDescription>Innovative and Attractive Interface for your NFTs and display the information contained within an NFTs token-bound account.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <Button>View Your Assets</Button>
                </CardFooter>
            </Card>


            <Card className='flex flex-1 flex-col'>
                <CardHeader className='flex flex-col gap-2'>
                    <CardTitle>Built a storytelling</CardTitle>
                    <CardDescription>Now, each NFT has the capability to possess its unique story, paving the way for more intricate narratives and endless possibilities on the blockchain.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <Button>Start Storytelling</Button>
                </CardFooter>
            </Card>

        </div>
    );
};

export default HomeCard;