import React, { useState } from "react"

interface StickyNavProps {
  navItems: {
    name: string
    url: string
  }[]
}

const StickyNav: React.FC = ({ navItems }: StickyNavProps) => {
  const [isSticky, setIsSticky] = useState(false)

  const handleScroll = (): void => {
    if (window.pageYOffset > 0) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`${
        isSticky ? "fixed top-0 shadow" : ""
      } z-[1000] hidden w-full justify-center bg-base-100 sm:flex`}
    >
      <div className={"mx-auto flex items-center justify-between py-4"}>
        {navItems?.map((item) => (
          <NavItem {...item} key={item.name} />
        ))}
        <div className="relative inline-block rounded border">
          <input
            type="text"
            placeholder="Search Results"
            className="focus:shadow-outline-blue rounded border border-gray-400 bg-white py-2 pr-8 pl-3 leading-tight text-gray-700 focus:border-blue-500 focus:outline-none"
          />
          <SearchIcon />
        </div>
      </div>
    </nav>
  )
}

export default StickyNav

StickyNav.defaultProps = {
  navItems: [
    {
      name: "Warranty",
      url: "/warranty",
    },
    {
      name: "Call Us",
      url: "/call-us",
    },
    {
      name: "Contact Us",
      url: "/contact-us",
    },
  ],
}

const NavItem: React.FC<{ url: string; name: string }> = ({ url, name }) => (
  <div className="mr-4 inline-block">
    <a href={url} className="text-gray-600 hover:text-black">
      {name}
    </a>
  </div>
)

const SearchIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="absolute right-0 top-1/2 mr-2 h-6 w-6 -translate-y-1/2 text-gray-600"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M13.42 11.908a6.5 6.5 0 111.414-1.414l3.854 3.855a1 1 0 11-1.414 1.414l-3.854-3.854zm-6.92.048a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
      clipRule="evenodd"
    />
  </svg>
)
