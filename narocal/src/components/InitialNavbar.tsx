import React, { useState } from "react"
import Link from "next/link"
import {useRouter} from "next/router"
interface INavBar {
  style?: string
  link: string
  text: string
}

function InitialNavbar(props){

    const [query, setQuery] = useState("")
    const router = useRouter()

    function submitHandler(event){
        event.preventDefault()
        console.log("Our search keyword query: ", query);

        // props.onSearch(query)

        const fullPath = `/products/search/${query}`
        router.push(fullPath)
        
    }

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
                    <a className="btn btn-ghost normal-case text-lg text-alternative" href="/">NAROCAL</a>
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
                <div className="navbar-start"></div>
                <div className="navbar-center">
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
                            <a href="/products/clothing/clothing">CLOTHING</a>

                            <div className="dropdown-content card card-compact w-96 rounded-box bg-base-200 p-2 z-10 flex flex-row items-start">
                                <div>
                                    <ul>
                                        <li className="text-lg font-medium"><a href="/products/clothing/clothing">Clothing</a></li>
                                        <li><a href="/products/clothing/shirts">Shirts</a></li>
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
                            <span>BAGS</span>

                            <div className="dropdown-content card card-compact w-72 rounded-box bg-base-200 p-2 z-10 grid grid-cols-2">
                                <div>
                                    <ul>
                                        <li className="text-lg font-medium"><a href="/products/bags/bags">Bags</a></li>
                                        <li><a href="/products/bags/handbag">handbag</a></li>
                                        <li><a href="/products/bags/shoulder bag">shoulder bag</a></li>
                                        <li><a href="/products/bags/crossbody bag">crossbody bag</a></li>
                                        <li><a href="/products/bags/backpack">backpack</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li className="text-lg font-medium"><a>Bags Brands</a></li>
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

                <div className="navbar-end">
                    <div className="my-3 w-4/5">
                        <div className="relative flex w-full flex-wrap items-stretch">

                            <form onSubmit={submitHandler} className="relative flex w-full flex-wrap items-stretch">
                            
                                <input
                                type="text"
                                className="relative m-0 block w-5/6 flex-auto rounded border border-solid border-neutral-600 bg-transparent bg-clip-padding px-4 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-600 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-300 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon2" 
                                onChange={(e) => setQuery(e.target.value)}
                                />
                                
                                <span
                                className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                                id="basic-addon2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                        fill-rule="evenodd"
                                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                        clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default InitialNavbar