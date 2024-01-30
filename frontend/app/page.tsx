import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import HomeCard from "@/components/HomeCard"
import UserNFTs from "@/components/UserNFTs"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Pour Life into your Areon NFTs
        </h1>
        <p className="text-muted-foreground max-w-[700px] text-lg">
          <span>Dont just hold NFTs, use it. </span>{" "}
          Empowering the residents of the AreonCity to take actions
        </p>
      </div>
      <UserNFTs />
      <HomeCard />
    </section>
  )
}
