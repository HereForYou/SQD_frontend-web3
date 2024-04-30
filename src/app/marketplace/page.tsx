"use client";
import React, { useState, useEffect } from "react";
import Sort from "@/components/groups/groupSearch/sort";
import NavBar from "@/components/main/navbar";
import Laptop from "@/components/main/poster/laptop_screen";
import ViewProgress from "@/components/groups/groupSearch/viewProgress";
import Recruiting from "@/components/groups/groupSearch/recruiting";
import Image from "next/image";
import EyeIcon from "@/components/svgs/eye_icon";
import HeartIcon from "@/components/svgs/heart_icon";
import { useRouter } from "next/navigation";

import NFTs from "@/data/nfts.json";

export default function Home() {
  const [scale, setScale] = React.useState<number>(60);
  const [enableScale, setEnableScale] = useState<boolean>(true);
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set initial screen width
    setScreenWidth(window.innerWidth);
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setEnableScale(screenWidth > 1000);
  }, [screenWidth]);
  const router = useRouter();
  return (
    <>
      <Image
        src={"/assets/background_1.jpg"}
        alt="back"
        width={2900}
        height={1750}
        className="w-full"
      />
      <NavBar isBackbtn={false} url="marketplace" />
      <div className="mt-[100px] font-Maxeville">
        <div className="grouppage_container p-[20px] lg:flex items-center justify-between sm:grid sm:grid-cols-1 sticky top-[100px] z-10 bg-white/95 border-b-[1px]">
          <div className="flex justify-between w-[60%] mt-2">
            <Sort />
            {enableScale && (
              <div className="ps-[15px] w-full max-w-[300px]">
                <ViewProgress scale={scale} setScale={setScale} />
              </div>
            )}
            <div>
              <Recruiting />
            </div>
          </div>
          <div className="flex p-[1px] border rounded-full border-black h-[30px] lg:w-[35%] lg:mt-0 sm:w-full mt-[20px]">
            <input
              className="w-full h-full bg-transparent  border border-none outline-none outline-[0px] px-[10px] text-chocolate-main"
              placeholder="SEARCH"
            ></input>
            <button className="bg-chocolate-main text-white w-[100px] rounded-[30px] font-Maxeville hover:opacity-60">
              ENTER
            </button>
          </div>
        </div>
        {enableScale && (
          <div className="grouppage_container mt-5">
            <div
              className={`gap-3 grid xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5`}
              style={{
                gridTemplateColumns: `repeat(${Math.floor(
                  (100 - scale) / 10 + 1
                )}, 1fr)`,
              }}
            >
              {NFTs.map((item, index) => (
                <div
                  key={index}
                  className="relative text-md content-card cursor-pointer drop-shadow-lg"
                  onClick={() => router.push(`/details/public/${item.id}`)}
                >
                  <div className="absolute top-0 content-card-menu opacity-0 transition-all text-white bg-chocolate-main/80 w-full h-full rounded-lg">
                    <div>
                      <div className="absolute left-4 top-4">COLLECTION ID</div>
                      <div className="absolute left-4 bottom-4">3000 USDC</div>
                      <div className="absolute right-4 bottom-4 flex items-center gap-1 sm:gap-2">
                        <EyeIcon props="white" />
                        200
                        <HeartIcon props="white" />
                        20
                      </div>
                    </div>
                  </div>
                  <Image
                    src={item.avatar}
                    className="w-full h-full aspect-square object-cover rounded-lg"
                    alt="market_nft"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {!enableScale && (
          <div className="grouppage_container mt-5">
            <div
              className={`gap-3 grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5`}
            >
              {NFTs.map((item, index) => (
                <div
                  key={index}
                  className="relative text-md content-card cursor-pointer drop-shadow-lg"
                  onClick={() => router.push(`/details/public/${item.id}`)}
                >
                  <div className="absolute top-0 content-card-menu opacity-0 transition-all text-white bg-chocolate-main/80 w-full h-full rounded-lg">
                    <div>
                      <div className="absolute left-4 top-4">COLLECTION ID</div>
                      <div className="absolute left-4 bottom-4">3000 USDC</div>
                      <div className="absolute right-4 bottom-4 flex items-center gap-1 sm:gap-2">
                        <EyeIcon props="white" />
                        200
                        <HeartIcon props="white" />
                        20
                      </div>
                    </div>
                  </div>
                  <Image
                    src={item.avatar}
                    className="w-full h-full aspect-square object-cover rounded-lg"
                    alt="market_nft"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        <div
          className="mt-[-400px] bg-cover bg-no-repeat h-[920px] w-full -z-10"
          style={{ backgroundImage: "url('/assets/bg-1.jpg')" }}
        ></div>
      </div>
    </>
  );
}
