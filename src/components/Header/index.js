import React, { useState } from "react"
import { Link } from 'gatsby'
import { DrawerProvider } from './Drawer/DrawerContext'
import Menu from "./Menu"
import MobileMenu from './MobileMenu'

import HeaderWrapper, {
  NavbarWrapper,
  Logo,
  MenuWrapper,
  NavSearchButton,
  NavSearchWrapper,
  SearchCloseButton,
  NavSearchFromWrapper,
} from "./Header.style"

import LogoImage from '../../images/logo.png'

const MenuItems = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About Us",
    url: "/about-us",
  },
  {
    label: "404 Page",
    url: "/404",
  },
]

const Header = ({className, siteTitle, ...props}) => {


  // const toggleHandle = () => {
  //   setState({
  //     ...state,
  //     toggle: !state.toggle,
  //   })
  // }

  // Add all classs to an array
  const addAllClasses = ["header"]

  // className prop checking
  if (className) {
    addAllClasses.push(className)
  }

  return (
    <HeaderWrapper className={addAllClasses.join(" ")} {...props}>
      <NavbarWrapper className="navbar">
      <DrawerProvider>
        <MobileMenu items={MenuItems} logo={LogoImage} />
      </DrawerProvider>
      <Logo>
        <Link to="/">
          <img src={LogoImage} alt="logo" />
        </Link>
      </Logo>
      <MenuWrapper>
        <Menu items={MenuItems} />
      </MenuWrapper>
      </NavbarWrapper>
    </HeaderWrapper>
  )
}

export default Header
