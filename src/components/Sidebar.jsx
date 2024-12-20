import { CgHomeAlt } from "react-icons/cg";
import { BiBox } from "react-icons/bi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TbSettings } from "react-icons/tb";
import { ImCart } from "react-icons/im";
import { BsBell } from "react-icons/bs";
import { BsReceipt } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg';
import { useDisconnect } from "@web3modal/ethers/react";

const Sidebar = () =>  {
  const { disconnect } = useDisconnect()

  const activeStyle = {
    borderLeft: '1px solid #0C3B45',
    borderRight: '1px solid #0C3B45',
    width: '100%',
    padding: '20px'
  };

  return (
    <div className='bg-[#C7D5D8] w-[20%] text-[rgb(15,22,15)] p-8 py-12 h-[100vh] hidden lg:flex md:flex flex-col'>
      <img src={logo} alt='logo'className="mb-20" />
      <NavLink to="/dashboard" className="text-[14px] text-[#0F160F] flex items-center py-4 mb-4 px-4 hover:text-[#0C3B45]" style={({isActive}) => isActive ? activeStyle : null } end><CgHomeAlt className="mr-4" />Dashboard</NavLink>
      <NavLink to="chat" className="text-[14px] text-[#0F160F]  flex items-center py-4 mb-4 px-6  hover:text-[#0C3B45]" style={({isActive}) => isActive ? activeStyle : null }><BiBox className="mr-4" /> Chat</NavLink>
      <NavLink to="createprofile" className="text-[14px] text-[#0F160F]  flex items-center py-4 mb-4 px-6  hover:text-[#0C3B45]" style={({isActive}) => isActive ? activeStyle : null }><IoIosAddCircleOutline  className="mr-4" />Create Profile</NavLink>
      <NavLink to="market_place" className="text-[14px] text-[#0F160F]  flex items-center py-4 mb-4 px-6  hover:text-[#0C3B45]" style={({isActive}) => isActive ? activeStyle : null }><ImCart className="mr-4" /> Marketplace</NavLink>
      <NavLink to="notifications" className="text-[14px] text-[#0F160F]  flex items-center py-4 mb-4 px-6  hover:text-[#0C3B45]" style={({isActive}) => isActive ? activeStyle : null }><BsBell className="mr-4" /> Notifications</NavLink>
      <NavLink to="transactions" className="text-[14px] text-[#0F160F]  flex items-center py-4 mb-4 px-6  hover:text-[#0C3B45]" style={({isActive}) => isActive ? activeStyle : null }><BsReceipt className="mr-4" /> Transactions</NavLink>
      <button className="text-[14px] text-[#0F160F]  flex items-center py-4 mb-4 px-6  hover:text-[#0C3B45]" onClick={() => disconnect()}><TbSettings className="mr-4"  /> Log out</button>
    </div>
  );
}

export default Sidebar;