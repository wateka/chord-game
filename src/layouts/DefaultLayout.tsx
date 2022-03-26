import { Container } from "@mui/material"
import { Outlet } from "react-router"
import Header from "./header/Header"

export default function DefaultLayout() {
  return (
    <Container maxWidth="sm">
      <Header />
      <Outlet />
    </Container>
  )
}
