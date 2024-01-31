import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import HomeCard from "@/components/HomeCard"
import UserNFTs from "@/components/UserNFTs"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">

      <div className="flex h-[65vh] max-h-[65vh] w-[100%] flex-col items-center justify-center gap-6">
        <div className="flex flex-col">
          <p className="ml-4 text-xl font-extrabold leading-tight tracking-wide md:text-xl">
            Pour <span className="text-orange-500">Life</span>  into your
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-yellow-500 md:text-8xl">
            Areon NFTs
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-muted-foreground text-lg">
            <span>Dont just hold NFTs, use it. </span>{" "}
            Empowering the residents of the AreonCity to take actions
          </p>
          <p className="text-muted-foreground text-lg">Own assets. Take action. Connect to Areon Chain. All as your NFT.</p>

        </div>
      </div>


      <HomeCard />
      <UserNFTs />
    </section>
  )
}
