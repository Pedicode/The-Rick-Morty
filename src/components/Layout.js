import React from "react"
import { Outlet } from "react-router-dom"
import {
  LayoutContainer,
  LayoutHeader,
  LayoutFooter,
  LayoutMain,
} from "../core-Ui"
import Header from "./Header"
const Layout = () => {
  return (
    <LayoutContainer>
      <LayoutHeader>
        <Header />
      </LayoutHeader>
      <LayoutMain>{<Outlet />}</LayoutMain>
      <LayoutFooter>
        <p>❮❯ by Pedram Alikarimi 2022</p>
      </LayoutFooter>
    </LayoutContainer>
  )
}

export default Layout
