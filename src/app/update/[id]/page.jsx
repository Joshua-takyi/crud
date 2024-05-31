import { UpdateComponent } from "@/components/myUi/update";

const getData = async (id) => {
	try {
		const res = await fetch(`http://localhost:3000/api/items/${id}`, {
			cache: "no-store",
		});
		if (!res) {
			throw new Error(" failed to fetch");
		}
		const data = await res.json();
		return data;
	} catch (error) {
		console.log("an error occurred", error);
	}
};

export default async function Update({ params }) {
	const { id } = params;
	const all = await getData(id);
	const result = all.data;
	const { title, description, Category } = result;
	return (
		<div>
			<UpdateComponent
				defaultTitle={title}
				defaultDescription={description}
				id={id}
				defaultCategory={Category}
			/>
		</div>
	);
}
