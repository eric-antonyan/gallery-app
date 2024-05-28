import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import React, { useState } from 'react'
import Logo from './Logo'
import { Link, useLocation } from 'react-router-dom'

const NavBar = ({ textColor, secondaryTextColor, backgroundColor, primaryColor }) => {
  const location = useLocation();
  const pathName = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState()
  console.log(pathName);
  const pathActions = {
    "/create": false,
    "/auth": false,
  }

  const menuLists = pathActions[pathName] ? ["Home", "Works", "Services", "Eating", "Log Out"] : {
    create: {
      href: "/create",
      textContent: "Register"
    },
    login: {
      href: "/auth",
      textContent: "Log In",
    },
    support: {
      href: "/support",
      textContent: "Support"
    },
    services: {
      href: "/services",
      textContent: "Services"
    }
  }
  return (
    <Navbar isBlurred isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className={`bg-[${backgroundColor}]`} shouldHideOnScroll>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit">AGallery</p>
      </NavbarBrand>
      {
        pathActions[pathName] ? <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent> : ""
      }
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} color="secondary" href="#" variant="flat">
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Log In
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className='xs:gap-5'>
        {
          Object.entries(menuLists).map(([key, { href, textContent }]) => {
            const isPage = pathName === href;
            return <NavbarMenuItem key={key}>
              <Link id={'client' + textContent} className={isPage ? 'text-primary scale-150 xs:text-[1.6rem] transition font-bold relative duration-300' : 'text-foreground xs:text-[1.6rem] transition duration-300 font-bold'} to={href}
              size={"lg"} style={{transition: "0.5s", textShadow: isPage ? "0 0 10px hsla(var(--nextui-primary), 0.5)" : "none"}}>{textContent}</Link>
              <div className={` relative ${isPage ? "w-[150px] opacity-1 my-[10px] bg-primary" : "opacity-0 w-[0] my-[0]"} bg-foreground h-[3px] rounded-full`} style={{transition: "0.5s"}}></div>
            </NavbarMenuItem>
          })
        }
      </NavbarMenu>
    </Navbar>
  )
}

export default NavBar