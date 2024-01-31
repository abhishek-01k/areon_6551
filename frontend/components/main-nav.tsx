import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { useAddress } from "@thirdweb-dev/react"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const address = useAddress();
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>

      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}


          {address && (
            <nav className="flex gap-6">
              <Link
                href='/nfts'
                className="text-muted-foreground flex items-center text-sm font-medium"
              >
                Your NFTs
              </Link>
              <Link
                href='/dashboard'
                className="text-muted-foreground flex items-center text-sm font-medium"
              >
                Dashboard
              </Link>
            </nav>
          )}

        </nav>
      ) : null}

    </div>
  )
}
