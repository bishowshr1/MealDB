import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

const Header = () => {
  const nav = useNavigate();

  const [show, setShow] = useState(false);

  return (
    <header className="bg-black  text-white flex justify-between px-7 py-2 items-baseline pt-5">
      <div>
        <NavLink to='/' replace> <img src="https://themealdb.com/images/logo-small.png" alt="" />
        </NavLink>
      </div>

      {show && <nav className=" msm:flex hidden flex-col space-y-2 ">
        <NavLink className="font-bold" to='/about'>About</NavLink>
        <NavLink className="font-bold" to='/contact'>Contact</NavLink>
      </nav>

      }







      <button onClick={() => setShow(!show)}>
        {show ? <i className="fa-solid fa-xmark hidden msm:flex"></i> : <i className="fa-solid fa-bars hidden msm:flex"></i>}
      </button>
      <nav className="msm:hidden space-x-4 flex items-center py-1 ">
        <NavLink className="font-bold" to='/Home'>Home</NavLink>
        <NavLink className="font-bold " to='/about'>About</NavLink>
        <NavLink className="font-bold" to='/contact'>Contact</NavLink>
        <NavLink className="font-bold" to='/video'>video</NavLink>


      </nav>
    </header>

  )
}
export default Header
