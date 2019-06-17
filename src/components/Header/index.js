import React, { useState } from "react"
import { Link } from 'gatsby'

import HeaderWrapper, {
  NavbarWrapper,
  Logo,
  MenuWrapper,
  NavSearchButton,
  NavSearchWrapper,
  SearchCloseButton,
  NavSearchFromWrapper,
} from "./Header.style"

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
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </HeaderWrapper>
  )
}

export default Header
