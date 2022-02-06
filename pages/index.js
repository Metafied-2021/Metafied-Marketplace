import { ethers } from "ethers";
import { useState, useEffect } from "react";
import axios from "axios";
import Web3Modal from "web3modal";

import { nftaddress, nftmarketaddress } from "../config";
import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import Market from "../artifacts/contracts/NFTMarket.sol/NFTMarket.json";

export default function Home() {
	const [nfts, setnfts] = useState([]);
	const [loadingState, setloadingState] = useState("not-loaded");

	useEffect(() => {
		loadNFTs();
	}, []);

	async function loadNFTs() {
		const provider = new ethers.providers.JsonRpcProvider(
			"https://polygon-mumbai.g.alchemy.com/v2/WdDPcNEp13tbJjIVhcDSDgjQe1-l_HSQ"
		);
		const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
		const marketContract = new ethers.Contract(
			nftmarketaddress,
			Market.abi,
			provider
		);
		const data = await marketContract.fetchMarketItems();

		const items = await Promise.all(
			data.map(async (i) => {
				const tokenUri = await tokenContract.tokenURI(i.tokenId);
				const meta = await axios.get(tokenUri);
				let price = ethers.utils.formatUnits(i.price.toString(), "ether");

				let item = {
					tokenid: i.tokenId.toNumber(),
					seller: i.seller,
					owner: i.owner,
					image: meta.data.image,
					description: meta.data.description,
				};
				return item;
			})
		);
		setnfts(items);
		setloadingState("loaded");
	}

	async function buyNFT(nft) {
		const web3Modal = new Web3Modal();
		const connection = await web3Modal.connect();
		const provider = new ethers.providers.Web3Provider(connection);

		const signer = provider.getSigner();
		const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);

		const price = ethers.utils.parseUnits(nft.price, toString(), "ether");
		const tx = await contract.createMarketSale(nftaddress, nft.tokenid, {
			value: price,
		});

		await tx.wait();

		loadNFTs();
	}

	if (loadingState === "loaded" && !nfts.length)
		return (
			<h1 className=" px-20 py-10 text-3xl ">No Items in the Marketplace</h1>
		);

	return (
		<div className="flex float-left h-screen bg-black w-full">
			<div className="px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
					{nfts.map((nft, i) => (
						<div
							key={i}
							className=" border shadow rounded-xl overflow-hidden bg-slate-200"
						>
							<img src={nft.image} alt="loading" />
							<div className="p-4">
								<p
									style={{ height: "30px" }}
									className="text-2xl font-semibold text-black"
								>
									{nft.name}
								</p>
								<div style={{ height: "70px", overflow: "hidden" }}>
									<p className=" text-grey-800">{nft.description}</p>
								</div>
								<p className=" text-xl mb-4 font-bold text-black pl-28">
									<div className="text-black">{nft.price} MATIC</div>
								</p>
							</div>

							<div className="p-4 ">
								<button
									className=" w-full bg-sky-400 text-white font-bold py-2 px-12 rounded animate-pulse"
									onClick={() => buyNFT(nft)}
								>
									Buy
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
