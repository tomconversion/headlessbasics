import Link from 'next/link';
import React, { useState } from 'react';

// render a tailwind navigation menu
const GlobalTailwindNavigationMenu = ({ navItems, navClasses }) => {

  if(typeof navItems === 'undefined'){
    return (<></>);
  }

  navItems = navItems.filter((x) => typeof(x.url) !== 'undefined' && typeof(x.showInNavigation) !== 'undefined' && x.showInNavigation === true);

  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={navClasses}>

      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={() => setOpen(!isOpen)}
        >
          {BurgerMenu()}
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${!isOpen ? 'hidden' : ''
          }`}
      >
        <div className="text-sm lg:flex-grow">
          
          {navItems.map((item: any) => {
            return (
              <Link key={item.id} href={item.url} className="home-text transition duration-300 mr-8 block mt-4 lg:inline-block lg:mt-0">
                {item.name}
              </Link>
            )
          }
          )}

        </div>
        {/* <div>
          <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
        </div> */}
      </div>
    </nav>
  )
}

export {
  GlobalTailwindNavigationMenu
}

const BurgerMenu = () => {
  return (<div data-role="BurgerMenu" className="home-burger-menu">
    <svg viewBox="0 0 1024 1024" className="home-menu1">
      <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
      <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
      <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
    </svg>
  </div>);
}


// Small burger menu icon
{/* <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<title>Menu</title>
<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
</svg> */}