"use client";
import { FaRegTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
export default function Del({ id }) {
	const router = useRouter();
	const handleClick = async (e) => {
		e.preventDefault();

		const con = confirm("Are you sure you want to delete");
		if (con) {
			try {
				const res = await fetch(`/api/items?id=${id}`, {
					cache: "no-store",
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					},
				});
				if (!res) {
					throw new Error(" an error occurred");
				}
				toast.success("Item deleted successfully");
				router.push("/");
			} catch (error) {
				console.log("an error occurred", error);
				return [];
			}
		}
	};
	return (
		<>
			<FaRegTrashAlt
				onClick={handleClick}
				size={20}
				className="hover:text-destructive cursor-pointer transition-all"
			/>
			<Toaster richColors position="top-right" />
		</>
	);
}
