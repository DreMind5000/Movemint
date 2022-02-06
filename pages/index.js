import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

import { nftaddress, nftmarketaddress } from "../config";

import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import KBMarket from "../artifacts/contracts/KBMarket.sol/KBMarket.json";
import {
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  UsersIcon,
  ShieldCheckIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/outline";
export default function Home() {
  const security = [
    {
      name: "Full on-chain metadata",
      email:
        "Avoid power cheating, you can verify dicks attributes by yourself.",
      role: "Avoid power cheating, you can verify dicks attributes by yourself.",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      icon: ClockIcon,
      iconForeground: "text-purple-700",
      iconBackground: "bg-purple-50",
    },
    {
      name: "Decentralized storage",
      email: "lesliealexander@example.com",
      role: "Images are stored on IPFS to be immutable, immortal, unstoppable.",
      imageUrl:
        "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      icon: BadgeCheckIcon,
      iconForeground: "text-purple-700",
      iconBackground: "bg-purple-50",
    },
    {
      name: "Rarity algorithm",
      email: "lesliealexander@example.com",
      role: "Each dick is unique and each attribute has a rarity level.",
      imageUrl: "https://netstorm-react.theme-land.com/img/avatar_2.jpg",
      icon: ShieldCheckIcon,
      iconForeground: "text-purple-700",
      iconBackground: "bg-purple-50",
    },
    {
      name: "Vectorized images",
      email: "lesliealexander@example.com",
      role: "Ensure high quality in all sizes using SVG format.",
      imageUrl:
        "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      icon: CashIcon,
      iconForeground: "text-purple-700",
      iconBackground: "bg-purple-50",
    },

    // More security...
  ];

  const actions = [
    {
      title: "Set up your wallet",
      description:
        "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the NFT Marketplace in the top right corner. Learn about the wallets we support.",
      href: "#",
      icon: ClockIcon,
      iconForeground: "text-purple-600",
      iconBackground: "bg-purple-50",
    },
    {
      title: "Create your collection",
      href: "#",
      description:
        "Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
      icon: BadgeCheckIcon,
      iconForeground: "text-purple-600",
      iconBackground: "bg-purple-50",
    },
    {
      title: "Add your NFTs",
      description:
        "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.",
      href: "#",
      icon: UsersIcon,
      iconForeground: "text-purple-600",
      iconBackground: "bg-purple-50",
    },
    {
      title: "List them for sale",
      description:
        "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!",
      href: "#",
      icon: CashIcon,
      iconForeground: "text-purple-600",
      iconBackground: "bg-purple-50",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [nfts, setNFts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");

  useEffect(() => {
    loadNFTs();
  }, []);

  async function loadNFTs() {
    // what we want to load:
    // ***provider, tokenContract, marketContract, data for our marketItems***

    const provider = new ethers.providers.JsonRpcProvider(
      "https://rpc-mumbai.maticvigil.com"
    );
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const marketContract = new ethers.Contract(
      nftmarketaddress,
      KBMarket.abi,
      provider
    );
    const data = await marketContract.fetchMarketTokens();

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        // we want get the token metadata - json
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );

    setNFts(items);
    setLoadingState("loaded");
  }

  // function to buy nfts for market

  async function buyNFT(nft) {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      nftmarketaddress,
      KBMarket.abi,
      signer
    );

    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    const transaction = await contract.createMarketSale(
      nftaddress,
      nft.tokenId,
      {
        value: price,
      }
    );

    await transaction.wait();
    loadNFTs();
  }
  if (loadingState === "loaded" && !nfts.length)
    return <h1 className="px-20 py-7 text-4x1">No NFts in marketplace</h1>;

  return (
    <>
      <div className="min-h-screen pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">
                <div className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                  <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                    We are Selling
                  </span>
                  <span className="ml-4 text-sm">NFTS</span>
                  <ChevronRightIcon
                    className="ml-2 w-5 h-5 text-gray-500"
                    aria-hidden="true"
                  />
                </div>
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block"> Discover, collect, and sell </span>
                  <span className="block text-indigo-400">
                    extraordinary NFTs
                  </span>
                </h1>

                <p className="mt-10 text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                  10,000 unique NTFs with proof of ownership living on the
                  Polygon blockchain and following the ERC-721 standard, but
                  yeah, these are NFTs.{" "}
                </p>
                <div className="mt-10">
                  <Link href="/mint-item">
                    <button className=" mt-2 bg-gray-50 bg-opacity-5 border py-3 px-10 text-white rounded-full">
                      Create NFTS
                    </button>
                  </Link>
                  <button className="ml-5 mt-2 bg-indigo-700  py-3 px-10 text-white rounded-full">
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                <img
                  className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-0 pl-6 sm:mx-24 pb-10 pt-32 flex justify-between">
        <div>
          <p className="text-indigo-500 font-bold text-sm  tracking-wider ">
            Exclusive Assets
          </p>
          <p className="font-bold text-4xl pb-5  tracking-widest">Explore</p>
        </div>
        <div className="font-semibold text-xl pb-5 flex items-center">
          View All{" "}
          <span>
            <ArrowNarrowRightIcon className="h-6 ml-3 font-semibold" />
          </span>
        </div>
      </div>

      <div className="">
        <div className="mx-0 sm:mx-24 pl-6 pr-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4 pb-10">
            {nfts.map((nft, i) => (
              <>
                <div
                  key={i}
                  className=" border w-full shadow-2xl rounded-2xl overflow-hidden "
                >
                  <img
                    src={nft.image}
                    className=" h-48 object-cover w-full bg-gray-200 "
                  />
                  <div className="p-7 border-t border-5">
                    <div className="flex justify-between items-center">
                      <p
                        style={{ height: "50px" }}
                        className="text-2xl font-semibold  capitalize"
                      >
                        {nft.name}
                      </p>
                      <p className="text-xl mb-4 font-semibold text-gray-900  ">
                        {nft.price} ETH
                      </p>
                    </div>
                    <div style={{ height: "40px", overflow: "hidden" }}>
                      <p className="">
                        <span className="font-medium pr-1">Description: </span>
                        {nft.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 ">
                    <button
                      className="mb-2 w-full tracking-widest bg-indigo-700 text-white font-semibold py-3 px-12 rounded"
                      onClick={() => buyNFT(nft)}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="text-center pt-20 pb-10">
            <button className=" bg-purple-50 border border-indigo-700 py-3 px-10 text-indigo-700 rounded-full">
              Load More
            </button>
          </div>
        </div>
      </div>
      <div className="mx-0 pl-6 sm:mx-24 pb-10 pt-10">
        <p className="text-indigo-500 tracking-widest font-bold text-sm ">
          How It Works
        </p>
        <p className=" font-bold text-3xl pb-5 tracking-wide ">
          Create and sell your NFTs
        </p>
      </div>
      <div className=" mb-20 rounded-lg  overflow-hidden shadow-xl p-3 sm:grid sm:grid-cols-4 sm:gap-px lg:mx-24 sm:mx-0">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              "relative group  p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  "rounded-lg inline-flex p-4 "
                )}
              >
                <action.icon className="h-10 w-10" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium">
                <a className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span
                    className=" text-gray-800 absolute inset-0"
                    aria-hidden="true"
                  />
                  <p className="text-2xl">{action.title}</p>
                </a>
              </h3>
              <p className="mt-2 text-md text-gray-500">{action.description}</p>
            </div>
            <span
              className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
