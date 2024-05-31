import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
export default function SideBarComponent() {
	return (
		<div className="flex lg:h-screen sticky top-0 z-50 shadow-md">
			<div className="hidden lg:block lg:w-64 lg:shrink-0  bg-[#836FFF]  ">
				<div className="flex h-full flex-col justify-between  p-3  py-2">
					<div className="space-y-6 p-2">
						<Link className="flex items-center gap-2 font-semibold " href="/">
							<MountainIcon className="h-6 w-6 text-slate-100" />
							<span className="text-lg text-slate-100">Project_Inc</span>
						</Link>
						<nav className="space-y-1">
							<Link
								className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
								href="/"
							>
								<HomeIcon className="h-5 w-5" />
								Home
							</Link>
							{/* <Link
								className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
								href="#"
							>
								<LayoutDashboardIcon className="h-5 w-5" />
								Dashboard
							</Link> */}
							<Link
								className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
								href="/add"
							>
								<LayoutDashboardIcon className="h-5 w-5" />
								Add
							</Link>
						</nav>
					</div>
				</div>
			</div>
			<div className="flex-1 z-50">
				<header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-white px-4 dark:border-gray-700 dark:bg-gray-900 lg:hidden">
					<Link
						className="flex items-center gap-2 text-primary	font-semibold"
						href="/"
					>
						<MountainIcon className="h-6 w-6" />
						<span className="text-lg">Project_Inc</span>
					</Link>
					<Sheet>
						<SheetTrigger asChild>
							<Button className="rounded-full" size="icon" variant="outline">
								<MenuIcon className="h-6 w-6" />
								<span className="sr-only">Toggle navigation</span>
							</Button>
						</SheetTrigger>
						<SheetContent className="w-64 bg-[#836FFF]" side="left">
							<div className="flex h-full flex-col justify-between p-6">
								<div className="space-y-6">
									<Link
										className="flex items-center gap-2 font-semibold text-slate-100"
										href="/"
									>
										<MountainIcon className="h-6 w-6" />
										<span className="text-lg">Project_Inc</span>
									</Link>
									<nav className="space-y-1">
										<Link
											className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
											href="/"
										>
											<HomeIcon className="h-5 w-5" />
											Home
										</Link>
										{/* <Link
											className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
											href="#"
										>
											<LayoutDashboardIcon className="h-5 w-5" />
											Dashboard
										</Link> */}
										<Link
											className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
											href="/add"
										>
											<LayoutDashboardIcon className="h-5 w-5" />
											Add
										</Link>
									</nav>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</header>
			</div>
		</div>
	);
}

function HomeIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
			<polyline points="9 22 9 12 15 12 15 22" />
		</svg>
	);
}

function LayoutDashboardIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="7" height="9" x="3" y="3" rx="1" />
			<rect width="7" height="5" x="14" y="3" rx="1" />
			<rect width="7" height="9" x="14" y="12" rx="1" />
			<rect width="7" height="5" x="3" y="16" rx="1" />
		</svg>
	);
}

function MenuIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}

function MountainIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
		</svg>
	);
}
