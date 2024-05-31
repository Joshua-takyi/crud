import Link from "next/link";
import Del from "./delete";
import { FaRegPenToSquare } from "react-icons/fa6";

const createdColors = {
	low: "#C3FF93",
	medium: "#94FFD8",
	high: "#FF204E",
	default: "#FFFFFF", // Add a default color
};

const getData = async () => {
	try {
		const res = await fetch("http://localhost:3000/api/items", {
			cache: "no-store",
		});
		if (!res.ok) {
			throw new Error("Failed to fetch data");
		}
		const data = await res.json();
		return data;
	} catch (error) {
		//! Ensure an empty array is returned on error
		console.log("An error occurred while fetching data", error);
		return { data: [] };
	}
};

export default async function List() {
	const data = await getData();
	const items = data.data || [];

	return (
		<div className="grid  grid-cols-1 p-3 gap-3">
			{items.map((i) => (
				<Link key={i._id} href={`/myTask/${i._id}`} legacyBehavior={true}>
					<div className="flex flex-row p-2 border rounded-lg shadow-md bg-slate-50 w-full cursor-pointer">
						<div className="flex flex-col p-2 space-y-2 min-w-full w-full">
							<p
								className="p-2 border font-semibold min-w-fit max-w-16 rounded-sm text-center"
								style={{
									backgroundColor:
										createdColors[i.category] || createdColors.default,
								}}
							>
								{i.category}
							</p>
							<div className="flex flex-row justify-between">
								<h1 className="font-medium lg:text-[20px] text-[15px]">
									{i.title}
								</h1>
								<div className="flex flex-row space-x-2 items-center">
									<Link href={`/update/${i._id}`}>
										<FaRegPenToSquare
											size={20}
											className="hover:text-[#836FFF] transition-all"
										/>
									</Link>
									<Del id={i._id} />
								</div>
							</div>
							{/* <p className="text-balance py-2 text-[#000001] border-b-2">
							{i.description}
						</p> */}
							<p
								className="animate-pulse text-slate-600 flex items-end h-full"
								id="end"
							>
								created on: {new Date(i.createdAt).toLocaleString()}
							</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}
