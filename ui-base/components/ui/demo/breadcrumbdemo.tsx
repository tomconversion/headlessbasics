import { FileIcon, HomeIcon } from "@radix-ui/react-icons"
import { Fragment } from "react"

import Breadcrumbs from "../breadcrumbs/Breadcrumbs"

const data = [
  {
    heading: "Breadcrumb : Default",
    links: [
      {
        href: "#home",
        text: "Home",
      },
      {
        href: "#docs",
        text: "Documents",
      },
      {
        href: "#docs/add",
        text: "Add Document",
      },
    ],
  },
  {
    heading: "Breadcrumb : With Icons",
    links: [
      {
        href: "#home",
        icon: "HomeIcon",
        text: "Home",
      },
      {
        href: "#docs",
        icon: "FileIcon",
        text: "Documents",
      },
      {
        href: "#docs/add",
        icon: "AddFileIcon",
        text: "Add Document",
      },
    ],
  },
]

export default function BreadcrumbDemo() {
  return (
    <>
      {data.map((item, index) => (
        <Fragment key={index}>
          <h1 className="my-4 text-2xl font-bold ">{item.heading}</h1>
          <Breadcrumbs data={{ links: item.links, iconObject: icons }} />
        </Fragment>
      ))}
    </>
  )
}

const icons = {
  HomeIcon: <HomeIcon className="mr-2 h-4 w-4 stroke-current" />,
  FileIcon: <FileIcon className="mr-2 h-4 w-4 stroke-current" />,
  AddFileIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="mr-2 h-4 w-4 stroke-current "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),
}
