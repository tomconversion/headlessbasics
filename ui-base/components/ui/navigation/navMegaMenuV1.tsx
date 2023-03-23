import Link from 'next/link';
import Image from "next/image";
import React, { useState } from 'react';
import { getLogger } from '@/ui-base/lib/services/logging/LogConfig';

const log = getLogger("headless.components.navMegaMenuV1");

// render a tailwind navigation menu
const NavMegaMenuV1 = ({ navItems, navClasses }) => {

  if(typeof navItems === 'undefined'){
    return (<></>);
  }

  navItems = navItems.filter((x) => typeof(x.url) !== 'undefined' && typeof(x.showInNavigation) !== 'undefined' && x.showInNavigation === true);

  log.debug("navItems 2: ", JSON.stringify(navItems));

  const [isOpen, setOpen] = useState(false);

  return (

    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          
                    
          {navItems.map((item: any) => {
            log.debug("item: ", JSON.stringify(item));
              return (
                <li key={item.id}>
                  <Link key={item.id} href={item.url}>
                    {item.name}
                  </Link>
                </li>
              )
            }
          )}
          
          {/* <li tabIndex={0}>
            <a className="justify-between">
              Parent
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
            </a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li> */}
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl">ATA Automation</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
          {navItems.map((item: any) => {
            log.debug("item: ", JSON.stringify(item));
              return (
                <li key={item.id}>
                  <Link key={item.id} href={item.url}>
                    {item.name}
                  </Link>
                </li>
              )
            }
          )}
        {/* <li tabIndex={0}>
          <a>
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li> */}
      </ul>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image alt="International Sites" src="/ata-multisite/images/global/world-97864_960_720.png" width={100} height={100} />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li className="w-full min-h-full">          
          <label tabIndex={0} className="w-full btn btn-ghost btn-circle avatar">
            <div className="flex">
              <Link href={'/au'}>
                <div className="w-100 rounded-full">
                  <Image alt="International Sites" src="/ata-multisite/images/global/australia-28586_960_720.png"  width={100} height={100} />
                </div>
              </Link>
              <Link href={'/'}>
                <div className="w-100 rounded-full">
                  <Image alt="International Sites" src="/ata-multisite/images/global/usa-1960922_960_720.jpg"  width={100} height={100} />
                </div>
              </Link>
            </div>
          </label>          
        </li>
      </ul>
    </div>
  </div>
  )
}

export { NavMegaMenuV1 }


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