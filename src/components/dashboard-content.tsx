"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileUploadTable } from "@/components/file-upload-table"
import { Search, Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

import { Inter } from "next/font/google"

const inter = Inter({
	subsets: ['latin']
})

interface StatCardProps {
	title: string;
	value: string;
	highlight?: boolean;
}

export function DashboardContent() {
	return (
		<div className="flex-1 overflow-auto bg-(--dashboard-backgroundcolor)">
			<header className="flex items-center justify-between p-4 ">
				<h1 className="text-2xl font-bold">Overview</h1>
				<div className="flex items-center gap-4">
					<button className="text-gray-500 p-2 hover:bg-gray-100 rounded-full">
						<Search size={20} />
					</button>
					<button className="text-gray-500 p-2 hover:bg-gray-100 rounded-full relative">
						<Bell size={20} />
						<span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-blue-600 border-2 border-white"></span>
					</button>
					<div className="h-6 border-l border-gray-300"></div>
					<div className="flex items-center gap-3">
						<span className="text-sm font-semibold hidden md:block">Jones Ferdinand</span>
						<Avatar>
							<AvatarImage src="/useravatar.png" />
							<AvatarFallback>JF</AvatarFallback>
						</Avatar>
					</div>
				</div>
			</header>

			<main className="p-4 md:p-6">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
					<StatCard title="Unresolved" value="60" />
					<StatCard title="Overdue" value="16" highlight />
					<StatCard title="Open" value="43" />
					<StatCard title="On hold" value="64" />
				</div>

				<div className="mb-6">
					<img
						src="/trendsgraph.png"
						className="w-full"
						alt="additional image"
					/>
				</div>

				<Card className={inter.className}>
					<div className="p-6 bg-white rounded-md">
						<div className="flex items-center justify-between mb-6">
							<h2 className="text-lg font-medium">Files uploaded</h2>
							<div className="flex items-center gap-2">
								<Button variant="outline" size="sm" className="font-medium text-sm">
									Download all
								</Button>
								<Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-medium text-sm">
									<Image src="/filesuploadedtable/icons/Icon-7.png" width={18.34} height={15} alt="upload-icon" />
									Upload
								</Button>
							</div>
						</div>
						<FileUploadTable />
					</div>
				</Card>
			</main>
		</div>
	)

}

function StatCard({ title, value, highlight = false }: StatCardProps) {
	return (
		<Card className="p-6 bg-white hover:border-blue-600 transition-colors group">
			<h3 className="text-lg font-bold text-gray-500 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
			<div className={`text-4xl font-bold ${highlight ? "" : ""} group-hover:text-blue-600 transition-colors`}>
				{value}
			</div>
		</Card>
	)
}



