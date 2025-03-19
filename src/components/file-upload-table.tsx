"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { MoreVertical, FileText, Video, FileIcon } from "lucide-react"
import Image from "next/image"

const files = [
  {
    id: 1,
    name: "Tech requirements.pdf",
    type: "pdf",
    size: "200 KB",
    dateUploaded: "Jan 4, 2022",
    lastUpdated: "Jan 4, 2022",
    uploadedBy: "Olivia Rhye",
  },
  {
    id: 2,
    name: "Dashboard screenshot.jpg",
    type: "jpg",
    size: "720 KB",
    dateUploaded: "Jan 4, 2022",
    lastUpdated: "Jan 4, 2022",
    uploadedBy: "Phoenix Baker",
  },
  {
    id: 3,
    name: "Dashboard prototype recording.mp4",
    type: "mp4",
    size: "16 MB",
    dateUploaded: "Jan 2, 2022",
    lastUpdated: "Jan 2, 2022",
    uploadedBy: "Lana Steiner",
  },
  {
    id: 4,
    name: "Dashboard prototype FINAL.fig",
    type: "fig",
    size: "4.2 MB",
    dateUploaded: "Jan 6, 2022",
    lastUpdated: "Jan 6, 2022",
    uploadedBy: "Demi Wilkinson",
  },
  {
    id: 5,
    name: "UX Design Guidelines.docx",
    type: "docx",
    size: "400 KB",
    dateUploaded: "Jan 8, 2022",
    lastUpdated: "Jan 8, 2022",
    uploadedBy: "Candice Wu",
  },
  {
    id: 6,
    name: "Dashboard interaction frames",
    type: "folder",
    size: "12 MB",
    dateUploaded: "Jan 6, 2022",
    lastUpdated: "Jan 6, 2022",
    uploadedBy: "Natali Craig",
  },
  {
    id: 7,
    name: "App inspiration.png",
    type: "png",
    size: "800 KB",
    dateUploaded: "Jan 4, 2022",
    lastUpdated: "Jan 4, 2022",
    uploadedBy: "Drew Cano",
  },
]

function getFileIcon(type: string) {
  const width = 13.33
  const height = 16.67
  switch (type) {
    case "pdf":
      return <Image src="\filesuploadedtable\icons\Icon.svg" width={width} height={height} alt="pdf-file" />
    case "jpg":
      return <Image src="\filesuploadedtable\icons\Icon-1.svg" width={width} height={height} alt="pdf-file" />
    case "png":
      return <Image src="\filesuploadedtable\icons\Icon-1.svg" width={width} height={height} alt="pdf-file" />
    case "mp4":
      return <Image src="\filesuploadedtable\icons\Icon-2.svg" width={width} height={height} alt="pdf-file" />
    case "fig":
      return <Image src="\filesuploadedtable\icons\Icon-3.svg" width={width} height={height} alt="pdf-file" />
    case "docx":
      return <Image src="\filesuploadedtable\icons\Icon.svg" width={width} height={height} alt="pdf-file" />
    case "folder":
      return <Image src="\filesuploadedtable\icons\Icon-5.svg" width={width} height={height} alt="pdf-file" />
    default:
      return <FileIcon className="h-5 w-5 text-gray-500" />
  }
}

export function FileUploadTable() {
  const [selectedFiles, setSelectedFiles] = useState([])

  const toggleSelectAll = () => {
    if (selectedFiles.length === files.length) {
      setSelectedFiles([])
    } else {
      setSelectedFiles(files.map((file) => file.id))
    }
  }

  const toggleSelectFile = (id) => {
    if (selectedFiles.includes(id)) {
      setSelectedFiles(selectedFiles.filter((fileId) => fileId !== id))
    } else {
      setSelectedFiles([...selectedFiles, id])
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className="text-xs font-medium text-(--table-header-text-color)">
          <TableHead className="w-12">
            <Checkbox
              checked={selectedFiles.length === files.length && files.length > 0}
              onCheckedChange={toggleSelectAll}
              aria-label="Select all files"
            />
          </TableHead>
          <TableHead className="">File name</TableHead>
          <TableHead className="hidden md:table-cell">File size</TableHead>
          <TableHead className="hidden lg:table-cell">Date uploaded</TableHead>
          <TableHead className="hidden lg:table-cell">Last updated</TableHead>
          <TableHead className="hidden md:table-cell">Uploaded by</TableHead>
          <TableHead className="w-12"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {files.map((file, index) => (
          <TableRow key={file.id} className={index % 2 !== 0 ? "bg-(--dashboard-table-stripped-color)" : ""}>
            <TableCell>
              <Checkbox
                checked={selectedFiles.includes(file.id)}
                onCheckedChange={() => toggleSelectFile(file.id)}
                aria-label={`Select ${file.name}`}
              />
            </TableCell>
            <TableCell className="font-medium text-sm text-(--table-row-text-base-color)">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-(--dashboard-blue-accent)">
                  {getFileIcon(file.type)}
                </div>
                <span className="truncate max-w-[200px]">
                  {file.name}
                  <br />
                  <span className="font-regular text-sm text-(--table-header-text-color)">{file.size}</span>
                </span>
              </div>

            </TableCell>
            <TableCell className="hidden md:table-cell font-regular text-sm text-(--table-header-text-color)">{file.size}</TableCell>
            <TableCell className="hidden lg:table-cell font-regular text-sm text-(--table-header-text-color)">{file.dateUploaded}</TableCell>
            <TableCell className="hidden lg:table-cell font-regular text-sm text-(--table-header-text-color)">{file.lastUpdated}</TableCell>
            <TableCell className="hidden md:table-cell font-regular text-sm text-(--table-header-text-color)">{file.uploadedBy}</TableCell>
            <TableCell>
              <button className="text-gray-500">
                <MoreVertical size={16} />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

