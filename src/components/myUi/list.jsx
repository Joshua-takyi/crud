export default function List() {
	return (
		<div className="grid lg:grid-cols-2  grid-cols-1 gap-6">
			<div className="flex flex-row p-4 border rounded-lg shadow-lg">
				<div className="flex flex-col space-y-2 ">
					<h1 className="font-medium lg:text-[20px] text-[15px]">title</h1>
					<p className="text-balance">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
						dolor quam itaque nihil recusandae. Quas deserunt quidem assumenda
						iusto laboriosam!
					</p>
					<p className="animate-pulse first-letter:text-red-300">createdAt</p>
				</div>
			</div>
		</div>
	);
}
