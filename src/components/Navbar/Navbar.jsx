import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Alfred</h1>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='about'>About</NavLink>
      <NavLink to='portfolio'>Portfolio</NavLink>
      <NavLink to='contact'>Contact</NavLink>
    </nav>
  )
}
export default Navbar