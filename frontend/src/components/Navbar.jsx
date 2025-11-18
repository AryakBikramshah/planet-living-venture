import React from "react"
import { NavLink } from "react-router-dom"
import { User, Search, ShoppingCart, X } from "lucide-react";


const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const [searchOpen, setSearchOpen] = React.useState(false)
    const [userDropdown, setUserDropdown] = React.useState(false)
    
    const navLinkClass = ({ isActive }) => 
        `relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 ${
            isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
        }`
    
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <a href="/">
               <h1>Planet Living Venture</h1>
            </a>

            {/* Desktop Menu - Centered */}
            <div className="hidden sm:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
                <NavLink to="/" className={navLinkClass}>
                    Home
                </NavLink>
                <NavLink to="/about-us" className={navLinkClass}>
                    About Us
                </NavLink>
                <NavLink to="/collection" className={navLinkClass}>
                    Collection
                </NavLink>
                <NavLink to="/contact" className={navLinkClass}>
                    Contact
                </NavLink>
            </div>

            {/* Icons */}
            <div className="hidden sm:flex items-center gap-6">
                <Search 
                    className="w-5 h-5 text-gray-700 cursor-pointer" 
                    onClick={() => setSearchOpen(true)}
                />

                <div className="relative cursor-pointer">
                    <ShoppingCart className="w-5 h-5 text-green-500" />
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-green-500 w-[18px] h-[18px] rounded-full">3</button>
                </div>

                <div className="relative">
                    <User 
                        className="w-5 h-5 text-gray-700 cursor-pointer" 
                        onClick={() => setUserDropdown(!userDropdown)}
                    />
                    
                    {userDropdown && (
                        <div className="absolute right-0 top-8 bg-white shadow-lg rounded-lg py-2 w-40 border border-gray-200 z-10">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                My Profile
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                My Orders
                            </a>
                            <hr className="my-1 border-gray-200" />
                            <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Search Modal */}
            {searchOpen && (
                <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
                    <div 
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setSearchOpen(false)}
                    />
                    <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl p-6">
                        <button 
                            onClick={() => setSearchOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div className="flex items-center gap-3 border-b border-gray-300 pb-4">
                            <Search className="w-5 h-5 text-gray-500" />
                            <input 
                                type="text"
                                placeholder="Search products..."
                                className="flex-1 text-lg outline-none"
                                autoFocus
                            />
                        </div>
                    </div>
                </div>
            )}

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <NavLink to="/" className={({ isActive }) => isActive ? 'block py-1 text-green-500 font-semibold' : 'block py-1'}>
                    Home
                </NavLink>
                <NavLink to="/about-us" className={({ isActive }) => isActive ? 'block py-1 text-green-500 font-semibold' : 'block py-1'}>
                    About Us
                </NavLink>
                <NavLink to="/collection" className={({ isActive }) => isActive ? 'block py-1 text-green-500 font-semibold' : 'block py-1'}>
                    Collection
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'block py-1 text-green-500 font-semibold' : 'block py-1'}>
                    Contact
                </NavLink>
            </div>

        </nav>
    )
}
export default Navbar