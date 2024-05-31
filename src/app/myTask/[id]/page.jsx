const createdColors = {
	low: "#C3FF93",
	medium: "#94FFD8",
	high: "#FF204E",
	default: "#FFFFFF",
};

const getData = async (id) => {
	try {
		const res = await fetch(`http://localhost:3000/api/items/${id}`, {
			cache: "no-store",
		});
		if (!res) {
			throw new Error("Failed to fetch data");
		}
		const data = await res.json();
		return data;
	} catch (error) {
		console.log("An error occurred while fetching data", error);
		return { data: [] };
	}
};

export default async function Single({ params }) {
	const { id } = params;
	const all = await getData(id);
	const result = all.data;
	const { title, description, category, createdAt } = result;

	return (
		<>
			<p className="border-b-2 text-primary text-[20px] font-medium my-5 shadow-sm">
				Details
			</p>
			<div className="container mx-auto flex flex-col border my-24 p-5 rounded-md relative bg-slate-50">
				<div className="flex flex-col space-y-1 mb-4">
					<h1 className="font-bold">{title}</h1>
					<p className="text-sm">
						created on {new Date(createdAt).toDateString()}
					</p>
				</div>
				<p className="text-balance overflow-auto break-words mb-5">
					{description}
				</p>
				<p
					className="font-bold absolute bottom-0 right-0 p-3 rounded-bl-md rounded-tr-md"
					style={{
						backgroundColor: createdColors[category] || createdColors.default,
					}}
				>
					{category}
				</p>
			</div>
		</>
	);
}
