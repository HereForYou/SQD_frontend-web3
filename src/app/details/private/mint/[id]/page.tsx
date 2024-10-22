"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import TrendingIcon from "@/components/svgs/trending_icon";
import HeartIcon from "@/components/svgs/heart_icon";
import EyeIcon from "@/components/svgs/eye_icon";
import Collapse from "@/components/main/collapse";
import useGroupUIControlStore from "@/store/UI_control/groupPage/newgroupPage";

import ListModal from "@/components/main/modals/groups/listModal";

import Split_line from "@/components/main/split_line";

import NFTs from "@/data/nfts.json";
import { INFT, IGROUP, IUSER } from "@/types";
import useAuth from "@/hooks/useAuth";
import useAPI from "@/hooks/useAPI";

const Home = ({ params }: { params: { id: string } }) => {
  const setListModalState = useGroupUIControlStore((state) => state.updateListModal);
  const listModalState = useGroupUIControlStore((state) => state.listModal);
  const data = NFTs.find((nft) => nft.id === params.id);
  const auctionType = data?.auctionType;

  const { signIn, isAuthenticated, user } = useAuth();

  const [nftData, setNftData] = useState<INFT>();
  const [groupName, setGroupName] = useState<string>("");
  const [groupAddress, setGroupAddress] = useState<string>("");
  const [ownerName, setOwnerName] = useState<string>("");
  const [isDirector, setIsDirector] = useState<boolean>(false);
  const api = useAPI();
  const getNftData = async () => {
    const result = await api.post("/api/getNftById", { id: params.id });
    setNftData(result.data);
    console.log("auctiontype", result.data.auctiontype);
    console.log("result", result);
    const result1 = await api.post("/api/getGroupId", { id: result.data.groupid });
    setGroupName(result1.data.name);
    setGroupAddress(result1.data.address);
    if (user?.id === result1.data.director) setIsDirector(true);
    const result2 = await api.post("/auth/user/getUserByAddress", { id: result.data.owner });
    setOwnerName(result2.data.name);
  }
  useEffect(() => {
    getNftData();
  }, []);

  return (
    <>
      {listModalState && nftData && <ListModal listNft={nftData} groupAddress={groupAddress} />}

      <div className="mt-[120px] font-Maxeville">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 p-[40px] xl:pt-5">
          {nftData && (
            <div className="drop-shadow-md lg:me-[40px] sm:me-0">
              <Image
                src={nftData.avatar}
                className="h-[70vh] w-full object-cover"
                alt="group_avatar"
                width={706}
                height={706}
                sizes="100vw"
              />
              <div className="flex items-center gap-3 p-2">
                <EyeIcon props="#322A44" />
                <div>200</div>
                <div>WATCHING</div>
                <HeartIcon props="#322A44" />
                <div>20</div>
              </div>
            </div>
          )}
          <div className="p-2 flex-col flex justify-between">
            <div className="flex-col">
              <div className="text-[18px] flex gap-4">
                {nftData?.collectionname}
                <div className="flex items-center">
                  <TrendingIcon />
                </div>
              </div>
              <div className="text-[18px] underline">COLLECTION</div>
              <div className="text-gray-400 mt-3">Group</div>
              <div className="text-[18px]">{groupName}</div>
            </div>
            <div className="flex flex-col mb-[35px]">
              {/* <div>DESCRIPTION</div> */}
              <div className="">
                {
                  isDirector &&
                  <button onClick={() => setListModalState(true)} className='w-full bg-green-500 rounded-full text-white h-[30px] mb-5'>
                    LIST TO MARKETPLACE
                  </button>
                }
                <div className='mt-[20px] border-[1px] border-[#322A44]'></div>
                <Collapse title="Description">
                  <p>This is the content of the first collapsible section.</p>
                </Collapse>
                <Collapse title="History">
                  <p>This is the content of the second collapsible section.</p>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-[-400px] bg-cover bg-no-repeat h-[720px] w-full -z-10"
        style={{ backgroundImage: "url('/assets/bg-1.jpg')" }}
      ></div>
    </>
  );
};

export default Home;
