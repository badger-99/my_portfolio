import { Outlet } from "react-router-dom";
import './layout.scss'

const Layout = () => {
  return (
    <section id='layout'>
      <Outlet />
    </section>
  )
}
export default Layout