import React from "react";
import Link from "next/link";
import logo from "../public/icon.png";
import Image from "next/image";

function Navbar() {
	return (
		<div className=" max-w-10xl mx-auto px-2 sm:px-6 lg:px-8 bg-gray-800">
			<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
				<div className="hidden sm:block sm:ml-6 h-20 w-20 animate-pulse">
					<Image src={logo} />
				</div>

				<div className=" flex items-center justify-center pl-5">
					<input
						type="text"
						placeholder="Collection,item or user"
						className="px-4 py-2 border-2 border-gray-200 rounded w-96"
					/>
				</div>

				<div className="flex items-center float-right pl-28 ml-56">
					<div className="ml-40">
						<Link href="/">
							<a className="mr-6">
								<button className=" bg-gray-800 p-1 rounded-md text-gray-400 hover:text-white focus:outline-none  hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
									Home
								</button>
							</a>
						</Link>
						<Link href="/createitem">
							<a className="mr-6 ">
								<button className="bg-gray-800 p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
									Create Item
								</button>
							</a>
						</Link>
						<Link href="/my-assets">
							<a className="mr-6 ">
								<button className="bg-gray-800 p-1 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
									MY NFTs
								</button>
							</a>
						</Link>
						<Link href="/creator-dashboard">
							<a className="mr-6 ">
								<button className="bg-gray-800 p-1 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
									Creator Dashboard
								</button>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
