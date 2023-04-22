import React from "react"
import Link from "next/link"
interface INavBar {
  style?: string
  link: string
  text: string
}

function InitialNavbar(){
    return(
        <div className="flex flex-col">
            <div className="navbar bg-primary text-alternative">

                <div className="navbar-start">
                    <div className="dropdown bg-primary">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-1 shadow bg-primary text-alternative rounded-box w-52">

                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Brands
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                                </a>
                                <ul className="p-1 bg-primary text-alternative">
                                    <li><a>Submenu_1</a></li>
                                    <li><a>Submenu_2</a></li>
                                    <li><a>Submenu_3</a></li>
                                </ul>
                            </li>


                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Clothing
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                                </a>
                                <ul className="p-1 bg-primary text-alternative">
                                    <li><a>Submenu_1</a></li>
                                    <li><a>Submenu_2</a></li>
                                    <li><a>Submenu_3</a></li>
                                </ul>
                            </li>

                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Shoes
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                                </a>
                                <ul className="p-1 bg-primary text-alternative">
                                    <li><a>Submenu_1</a></li>
                                    <li><a>Submenu_2</a></li>
                                    <li><a>Submenu_3</a></li>
                                </ul>
                            </li>

                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                </div>

                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case text-l text-alternative" href="/">NAROCAL</a>
                </div>

                {/* <div className="flex-none"> */}
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-3">
                        <li><a className="text-alternative hover:bg-secondary" href="/login">Log in</a></li>
                        <li><a className="text-alternative hover:bg-secondary" href="/role">Register</a></li>
                    </ul>

                </div>

            </div>

            <div className="navbar bg-primary text-alternative hidden md:flex">

                <ul className="menu menu-horizontal rounded-box mx-auto">

                    <li tabIndex={0} className="dropdown dropdown-hover">
                        <span>BRANDS</span>

                        <div className="dropdown-content menu card card-compact w-64 rounded-box bg-base-200 p-2 z-10 grid grid-cols-1">
                            <div>
                                <li className="text-lg font-medium"><a>BRANDS</a></li>
                                <li><a>Submenu_1</a></li>
                                <li><a>Submenu_2</a></li>
                                <li><a>Submenu_3</a></li>
                                <li><a>Submenu_4</a></li>
                                <li><a>Submenu_5</a></li>
                            </div>
                        </div>
                    </li>

                    <li tabIndex={0} className="dropdown dropdown-hover">
                        <span>CLOTHING</span>

                        <div className="dropdown-content card card-compact w-96 rounded-box bg-base-200 p-2 z-10 grid grid-cols-3">
                            <div>
                                <li className="text-lg font-medium"><a>Clothing</a></li>
                                <li><a>Submenu_1</a></li>
                                <li><a>Submenu_2</a></li>
                                <li><a>Submenu_3</a></li>
                            </div>

                            <div>
                                <li className="text-lg font-medium"><a>Active Wear</a></li>
                                <li><a>Submenu_1</a></li>
                                <li><a>Submenu_2</a></li>
                                <li><a>Submenu_3</a></li>
                            </div>

                            <div>
                                <li className="text-lg font-medium"><a>Clothing Brands</a></li>
                                <li><a>Submenu_1</a></li>
                                <li><a>Submenu_2</a></li>
                                <li><a>Submenu_3</a></li>
                            </div>
                            
                        </div>
                    </li>

                    <li tabIndex={0} className="dropdown dropdown-hover">
                        <span>SHOES</span>

                        <div className="dropdown-content menu card card-compact w-80 rounded-box bg-base-200 p-2 z-10 grid grid-cols-2">
                            <div>
                                <li className="text-lg font-medium"><a>Shoes</a></li>
                                <li><a>Submenu_1</a></li>
                                <li><a>Submenu_2</a></li>
                                <li><a>Submenu_3</a></li>
                            </div>

                            <div>
                                <li className="text-lg font-medium"><a>Shoes brand</a></li>
                                <li><a>Submenu_1</a></li>
                                <li><a>Submenu_2</a></li>
                                <li><a>Submenu_3</a></li>
                            </div>
                            
                        </div>
                    </li>

                    <li tabIndex={0} className="dropdown dropdown-hover">
                        <span>ACCESSORIES</span>

                        <div className="dropdown-content menu card card-compact w-80 rounded-box bg-base-200 p-2 z-10 grid grid-cols-2">
                            <div>
                                <li className="text-lg font-medium"><a>Shoes</a></li>
                                <li><a>Submenu_1</a></li>
                                <li><a>Submenu_2</a></li>
                                <li><a>Submenu_3</a></li>
                            </div>

                            <div>
                                <li className="text-lg font-medium"><a>Shoes brand</a></li>
                                <li><a>Submenu_1</a></li>
                                <li><a>Submenu_2</a></li>
                                <li><a>Submenu_3</a></li>
                            </div>
                            
                        </div>
                    </li>

                    <li tabIndex={0} className="dropdown dropdown-hover">
                        <span>FOODS</span>

                        <div className="dropdown-content menu card card-compact w-80 rounded-box bg-base-200 p-2 z-10 grid grid-cols-2">
                            <div>
                                <li className="text-lg font-medium"><a>Snack</a></li>
                                <li><a>Submenu_1</a></li>
                                <li><a>Submenu_2</a></li>
                                <li><a>Submenu_3</a></li>
                            </div>

                            <div>
                                <li className="text-lg font-medium"><a>Processed Food</a></li>
                                <li><a>Submenu_1</a></li>
                                <li><a>Submenu_2</a></li>
                                <li><a>Submenu_3</a></li>
                            </div>
                            
                        </div>
                    </li>

                </ul>

            </div>

            {/* <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li tabIndex={0}>
                        <a>
                        Parent
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div> */}

            
            
        </div>
    )
}

export default InitialNavbar