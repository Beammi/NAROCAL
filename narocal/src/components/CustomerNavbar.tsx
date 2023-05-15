import React from "react"
import Link from "next/link"
interface INavBar {
  style?: string
  link: string
  text: string
}

function CustomerNavbar(){
    return(
        <div className="flex flex-col z-20 w-full fixed">
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
                <a className="btn btn-ghost normal-case text-lg text-alternative" href="/customer">NAROCAL</a>
            </div>


            <div className="navbar-end">
                    <ul className="menu menu-horizontal px-3">
                        <li><a className="text-alternative hover:bg-secondary" href="/">Chat</a></li>
                        <li><a className="text-alternative hover:bg-secondary" href="/">Profile</a></li>
                    </ul>

            </div>

        </div>

            <div className="navbar bg-primary text-alternative hidden md:flex">

                <ul className="menu menu-horizontal rounded-box mx-auto">

                    <li tabIndex={0} className="dropdown dropdown-hover">
                        <span>BRANDS</span>

                        <div className="dropdown-content menu card card-compact w-64 rounded-box bg-base-200 p-2 z-10 grid grid-cols-1">
                            <div>
                                <ul>
                                    <li className="text-lg font-medium"><a>BRANDS</a></li>
                                    <li><a>Submenu_1</a></li>
                                    <li><a>Submenu_2</a></li>
                                    <li><a>Submenu_3</a></li>
                                    <li><a>Submenu_4</a></li>
                                    <li><a>Submenu_5</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li tabIndex={0} className="dropdown dropdown-hover">
                        {/* <span>CLOTHING</span> */}
                        <a href="/clothing/clothing">CLOTHING</a>

                        <div className="dropdown-content card card-compact w-96 rounded-box bg-base-200 p-2 z-10 flex flex-row items-start">
                            <div>
                                <ul>
                                    <li className="text-lg font-medium"><a href="/clothing/clothing">Clothing</a></li>
                                    <li><a href="/clothing/shirts">Shirts</a></li>
                                    <li><a>Polo shirt</a></li>
                                    <li><a>Coat</a></li>
                                    <li><a>Jeans</a></li>
                                    <li><a>Shorts</a></li>
                                    <li><a>Suit</a></li>
                                    <li><a>Pants</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="text-lg font-medium"><a>Active Wear</a></li>
                                    <li><a>Submenu_1</a></li>
                                    <li><a>Submenu_2</a></li>
                                    <li><a>Submenu_3</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="text-lg font-medium"><a>Clothing Brands</a></li>
                                    <li><a>Submenu_1</a></li>
                                    <li><a>Submenu_2</a></li>
                                    <li><a>Submenu_3</a></li>
                                </ul>
                            </div>
                            
                        </div>
                    </li>

                    <li tabIndex={0} className="dropdown dropdown-hover">
                        <span>SHOES</span>

                        <div className="dropdown-content card card-compact w-72 rounded-box bg-base-200 p-2 z-10 grid grid-cols-2">
                            <div>
                                <ul>
                                    <li className="text-lg font-medium"><a>Shoes</a></li>
                                    <li><a>Submenu_1</a></li>
                                    <li><a>Submenu_2</a></li>
                                    <li><a>Submenu_3</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="text-lg font-medium"><a>Shoes Brands</a></li>
                                    <li><a>Submenu_1</a></li>
                                    <li><a>Submenu_2</a></li>
                                    <li><a>Submenu_3</a></li>
                                </ul>
                            </div>
                            
                        </div>
                    </li>

                    <li tabIndex={0} className="dropdown dropdown-hover">
                        <span>ACCESSORIES</span>

                        <div className="dropdown-content card card-compact w-72 rounded-box bg-base-200 p-2 z-10 grid grid-cols-2">
                            <div>
                                <ul>
                                    <li className="text-lg font-medium"><a>Accessories</a></li>
                                    <li><a>Submenu_1</a></li>
                                    <li><a>Submenu_2</a></li>
                                    <li><a>Submenu_3</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="text-lg font-medium"><a>Accessories Brands</a></li>
                                    <li><a>Submenu_1</a></li>
                                    <li><a>Submenu_2</a></li>
                                    <li><a>Submenu_3</a></li>
                                </ul>
                            </div>
                            
                        </div>
                    </li>

                    <li tabIndex={0} className="dropdown dropdown-hover">
                        <span>FOOD</span>

                        <div className="dropdown-content card card-compact w-72 rounded-box bg-base-200 p-2 z-10 grid grid-cols-2">
                            <div>
                                <ul>
                                    <li className="text-lg font-medium"><a>Snacks</a></li>
                                    <li><a>Submenu_1</a></li>
                                    <li><a>Submenu_2</a></li>
                                    <li><a>Submenu_3</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="text-lg font-medium"><a>Processed Food</a></li>
                                    <li><a>Submenu_1</a></li>
                                    <li><a>Submenu_2</a></li>
                                    <li><a>Submenu_3</a></li>
                                </ul>
                            </div>
                            
                        </div>
                    </li>

                    

                </ul>

            </div>
            
        </div>
    )
}

export default CustomerNavbar