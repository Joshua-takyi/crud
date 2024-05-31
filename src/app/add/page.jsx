import { AddComponent } from "@/components/myUi/add";

export default function Add() {
	return (
		<div className=" space-y-10 container mx-auto p-5">
			<nav className="flex flex-col">
				<h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center">
					Please fill in all the required fields
				</h1>
			</nav>
			<AddComponent />
		</div>
	);
}
