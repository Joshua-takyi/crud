"use client";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { useState } from "react";
export function AddComponent() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [isImportant, setIsImportant] = useState(false);
	const [category, setCategory] = useState("");

	const router = useRouter();
	const categoryChange = (value) => {
		setCategory(value);
		console.log(value);
	};
	const checkSelect = (checked) => {
		setIsImportant(checked);
		console.log(checked);
	};
	const HandleSubmit = async (e) => {
		e.preventDefault();
		if (!title || !description || !category) {
			toast.error("Please fill all the fields");
			return;
		}
		try {
			const res = await fetch("http://localhost:3000/api/items", {
				cache: "no-store",
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					title,
					description,
					category,
					isImportant,
				}),
			});
			if (!res) {
				throw new Error(" an error occurred");
			}
			toast.success("Item added successfully");
			router.push("/");
		} catch (error) {
			console.log("an error occurred", error);
			return [];
		}
	};
	return (
		<form
			className=" flex flex-col gap-5  p-5 max-w-3xl mx-auto "
			onSubmit={HandleSubmit}
		>
			<Input
				type="text"
				placeholder="Title"
				className="lg:shadow-xl shadow-md"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<Input
				type="text"
				placeholder="Description"
				className="shadow-xl"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<div className="flex flex-row justify-around  flex-wrap gap-3" id="add">
				<div className="shadow-xl ">
					<Select onValueChange={categoryChange} value={category}>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Select Category" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Category</SelectLabel>
								<SelectItem value="low">Low</SelectItem>
								<SelectItem value="medium">Medium</SelectItem>
								<SelectItem value="high">High</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<div className="flex items-center space-x-2">
					<Checkbox
						id="terms"
						onCheckedChange={checkSelect}
						checked={isImportant}
					/>
					<label
						htmlFor="terms"
						className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Accept terms and conditions
					</label>
				</div>
			</div>
			<Button type="submit">Add</Button>
			<Toaster richColors position="top-center" />
		</form>
	);
}
