"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export function Sidebar() {
	const pathname = usePathname()
	const navItemsMainArea = [
		{ name: "Overview", href: "/dashboard", icon: "/sidebar/icons/Vector-01.svg" },
		{ name: "Tickets", href: "/dashboard/tickets", icon: "/sidebar/icons/Vector.svg" },
		{ name: "Ideas", href: "/dashboard/ideas", icon: "/sidebar/icons/Vector-1.svg" },
		{ name: "Contacts", href: "/dashboard/contacts", icon: "/sidebar/icons/Vector-2.svg" },
		{ name: "Agents", href: "/dashboard/agents", icon: "/sidebar/icons/Vector-3.svg" },
		{ name: "Articles", href: "/dashboard/articles", icon: "/sidebar/icons/Vector-4.svg" },
	]

	const navItemsSecondArea = [
		{ name: "Settings", href: "/dashboard/settings", icon: "/sidebar/icons/Vector-5.svg" },
		{ name: "Subscription", href: "/dashboard/subscription", icon: "/sidebar/icons/Vector-6.svg" },
	]

	const renderingItemsPerList = (itemList: any[]) => {
		return (
			<div className="">
				<nav className=" mt-6">
					<ul className="space-y-1">
						{itemList.map((item) => {
							const isActive = pathname === item.href
							const icon = <Image
								src={item.icon}
								alt="logomark"
								width={16}
								height={15.06}
							/>
							return (
								<li key={item.name}>
									<Link
										href={item.href}
										className={`flex items-center gap-3 px-4 py-3 text-base ${isActive ? "border-l-4 border-blue-600 bg-(--sidebar-bg-active-tab)" : "text-gray-400 hover:bg-(--sidebar-bg-active-tab)"
											}`}
									>
										{icon}
										<span>{item.name}</span>
									</Link>
								</li>
							)
						})}
					</ul>
				</nav>
			</div>
		);
	}

	return (
		<div className="hidden md:flex flex-col w-64 bg-(--sidebar-bg-color) text-white">
			<div className="p-4 flex items-center gap-3">
				<img src="/logo.png" alt="Logo" className="h-8 w-8" />
				<span className="font-bold text-l text-(--degradaded-gray-70)">Dashboard Kit</span>
			</div>
			{renderingItemsPerList(navItemsMainArea)}
			<hr className="border-(--dashboard-foreground)" />
			{renderingItemsPerList(navItemsSecondArea)}
		</div>
	)
}

