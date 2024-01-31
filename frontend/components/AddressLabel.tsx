// @ts-nocheck
"use client"
import useMemorizedAddressLabel from '@/hooks/useMemorizedAddressLabel';
import Link from 'next/link';
import React from 'react';
import { MdOpenInNew } from "react-icons/md";
import { AiOutlineCopy } from "react-icons/ai";
import { ImNewTab } from "react-icons/im";


type AddressLabelProps = {
    address: string | undefined
    isTransactionAddress?: boolean
    showBlockExplorerLink?: boolean
    showCopyIntoClipboardButton?: boolean
    useFullAddress?: boolean
    enableTransaction?: boolean
}


const AddressLabel = ({
    address,
    isTransactionAddress,
    showBlockExplorerLink,
    showCopyIntoClipboardButton = true,
    useFullAddress = false,
    enableTransaction = false,
}: AddressLabelProps) => {

    const addressLabel = useMemorizedAddressLabel(address)

    const blockExplorerLink = `https://areonscan.com/${isTransactionAddress ? 'tx' : 'address'
        }/${address}`

    return (
        <div className='flex flex-row items-center gap-1'>
            <span>{useFullAddress ? address : addressLabel}</span>
            {showBlockExplorerLink && blockExplorerLink && (
                <Link target='_blank' href={blockExplorerLink}><MdOpenInNew /></Link>
            )}

            {showCopyIntoClipboardButton && (
                <div onClick={() => navigator?.clipboard?.writeText?.(address)}>
                    <AiOutlineCopy />
                </div>)}

            {enableTransaction && (
                <Link href={`/transactions/${address}`}>
                    {<ImNewTab />}
                </Link>

            )}

        </div>
    );
};

export default AddressLabel;