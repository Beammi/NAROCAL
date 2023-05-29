import React from "react"
import Link from "next/link"
// @tsx-nocheck

interface INavBar {
  style?: string
  link: string
  text: string
}
import { useState, useEffect } from "react"
import { supabase } from "lib/supabaseClient"
import { useRouter } from "next/router"
export const revalidate = 60

function CustomerNavbar() {
  const router = useRouter()
  const [cusId, setCusId] = useState(0)
  const [userId, setUserId] = useState(0)
  const [email, setEmail] = useState("")
  const [link, setLink] = useState("/chat/")
  const [query, setQuery] = useState("")

  function convertStringFormatt(word: string) {
    if (word == "" || word == null) {
      return ""
    } else {
      let temp = word.slice(1, word.length - 1)
      return temp
    }
  }
  useEffect(() => {
    async function getUserEmail() {
      const { data } = await supabase.auth.getUser()

      let userJson = data.user

      // alert(JSON.stringify(data.user.email))
      // alert(JSON.stringify(userJson.email))

      if (userJson != null) {
        // let temp = convertStringFormatt(JSON.stringify(userJson.email))
        setEmail(convertStringFormatt(JSON.stringify(userJson.email, null, 2)))
        console.log("from get user email" + email)
      }
    }
    async function getPublicUser() {
      console.log("email: " + email)
      const { data, error } = await supabase
        .from("User")
        .select()
        .eq("email", email)
      // console.log("Hereeeee"+data[0].id)
      if (error) {
        console.log("Error" + error)
      } else if (data == undefined) {
        console.log("pass")
        return
      } else {
        // Check if 'data' is defined and not empty
        if (data && data.length > 0) {
          // Check if 'data[0]' has a property 'id'
          if ("id" in data[0]) {
            setUserId(data[0].id)
          } else {
            console.log("Error: 'id' does not exist in 'data[0]'")
            // You can set some default value here, if needed
          }
        } else {
          console.log("Error: 'data' is undefined or empty")
          // You can set some default value here, if needed
        }
      }
    }
    async function getCustomerId() {
      const { data, error } = await supabase
        .from("CustomerProfile")
        .select()
        .eq("userId", userId)
      if (error) {
        console.log("Error in customer id")
      } else if (data != null) {
        // Check if 'data' is defined and not empty
        if (data && data.length > 0) {
          // Check if 'data[0]' has a property 'id'
          if ("id" in data[0]) {
            setCusId(userId)
            console.log("Customer id" + cusId)
          } else {
            console.log("Error: 'id' does not exist in 'data[0]'")
            // You can set some default value here, if needed
          }
        } else {
          console.log("Error: 'data' is undefined or empty")
          // You can set some default value here, if needed
        }
        // console.log("Hereeeee"+data[0].id)
        let temp = "/chat/" + cusId
        setLink(temp)
      } else {
        console.log("null")
      }
    }
    getPublicUser()
    getUserEmail()
    getCustomerId()
  }, [cusId, email, userId])

  function submitHandler(event) {
    event.preventDefault()
    console.log("Our search keyword query: ", query)

    // props.onSearch(query)

    const fullPath = `/products/search/${query}`
    router.push(fullPath)
  }

  return (
    <div className="flex flex-col z-20 w-full fixed">
      <div className="navbar bg-primary text-alternative">
        <div className="navbar-start">
          <div className="dropdown bg-primary">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-1 shadow bg-primary text-alternative rounded-box w-52"
            >
              <li tabIndex={0}>
                <a
                  className="justify-between"
                  href="/products/clothing/clothing"
                >
                  Clothing
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-3 bg-primary text-alternative">
                  <li>
                    <a href="/products/clothing/shirts">Shirts</a>
                  </li>
                  <li>
                    <a href="/products/clothing/hoodie">Hoodie</a>
                  </li>
                  <li>
                    <a href="/products/clothing/coat">Coat</a>
                  </li>
                  <li>
                    <a href="/products/clothing/jeans">Jeans</a>
                  </li>
                  <li>
                    <a href="/products/clothing/shorts">Shorts</a>
                  </li>
                  <li>
                    <a href="/products/clothing/suit">Suit</a>
                  </li>
                </ul>
              </li>

              <li tabIndex={0}>
                <a className="justify-between" href="/products/shoes/shoes">
                  Shoes
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-3 bg-primary text-alternative">
                  <li>
                    <a href="/products/shoes/sneakers">Sneakers</a>
                  </li>
                  <li>
                    <a href="/products/shoes/boots">Boots</a>
                  </li>
                </ul>
              </li>

              <li tabIndex={0}>
                <a className="justify-between" href="/products/bags/bags">
                  Bags
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-3 bg-primary text-alternative">
                  <li>
                    <a href="/products/bags/handbag">Handbag</a>
                  </li>
                  <li>
                    <a href="/products/bags/crossbodybag">Crossbody bag</a>
                  </li>
                  <li>
                    <a href="/products/bags/backpack">Backpack</a>
                  </li>
                </ul>
              </li>

              <li tabIndex={0}>
                <a
                  className="justify-between"
                  href="/products/accessories/accessories"
                >
                  Accessories
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-3 bg-primary text-alternative">
                  <li>
                    <a href="/products/accessories/belts">Belts</a>
                  </li>
                  <li>
                    <a href="/products/accessories/hats">Hats</a>
                  </li>
                  <li>
                    <a href="/products/accessories/ties">Ties</a>
                  </li>
                </ul>
              </li>

              <li tabIndex={0}>
                <a className="justify-between" href="/products/food/food">
                  Food
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-3 bg-primary text-alternative">
                  <li>
                    <a href="/products/food/snacks">Snacks</a>
                  </li>
                  <li>
                    <a href="/products/food/dryfood">Dry food</a>
                  </li>
                  <li>
                    <a href="/products/food/conveniencefood">
                      Convenience food
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-center">
          <a
            className="btn btn-ghost normal-case text-lg text-alternative"
            href="/customer"
          >
            NAROCAL
          </a>
        </div>

        {/* <div className="flex-none"> */}
        <div className="navbar-end">
          {/* <ul className="menu menu-horizontal px-3">
                        <li><a className="text-alternative hover:bg-secondary" href={nav1Link}>{nav1}</a></li>
                        <li><a className="text-alternative hover:bg-secondary" href={nav2Link}>{nav2}</a></li>
                    </ul> */}
          <ul className="menu menu-horizontal px-3">
            {/* <li>
            <a className="text-alternative hover:bg-secondary" href="/order/orderCustomerSide">
              Order
            </a>
          </li> */}
            <li>
              <a className="text-alternative hover:bg-secondary" href={link}>
                Chat
              </a>
            </li>
            <li>
              <Link
                className="text-alternative hover:bg-secondary"
                href="/customer/profile"
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar bg-primary text-alternative hidden md:flex">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal rounded-box mx-auto">
            <li tabIndex={0} className="dropdown dropdown-hover">
              {/* <span>CLOTHING</span> */}
              <a href="/products/clothing/clothing">CLOTHING</a>

              <div className="dropdown-content card card-compact w-48 rounded-box bg-base-200 p-2 z-10 grid grid-cols-1">
                <div>
                  <ul>
                    <li className="text-lg font-medium">
                      <a href="/products/clothing/clothing">Clothing</a>
                    </li>
                    <li>
                      <a href="/products/clothing/shirts">Shirts</a>
                    </li>
                    <li>
                      <a href="/products/clothing/hoodie">Hoodie</a>
                    </li>
                    <li>
                      <a href="/products/clothing/coat">Coat</a>
                    </li>
                    <li>
                      <a href="/products/clothing/jeans">Jeans</a>
                    </li>
                    <li>
                      <a href="/products/clothing/shorts">Shorts</a>
                    </li>
                    <li>
                      <a href="/products/clothing/suit">Suit</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li tabIndex={0} className="dropdown dropdown-hover">
              <a href="/products/shoes/shoes">SHOES</a>

              <div className="dropdown-content card card-compact w-48 rounded-box bg-base-200 p-2 z-10 grid grid-cols-2">
                <div>
                  <ul>
                    <li className="text-lg font-medium ">
                      <a href="/products/shoes/shoes">Shoes</a>
                    </li>

                    <li>
                      <a href="/products/shoes/sneakers">Sneakers</a>
                    </li>
                    <li>
                      <a href="/products/shoes/boots">Boots</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li tabIndex={0} className="dropdown dropdown-hover">
              <a href="/products/bags/bags">BAGS</a>

              <div className="dropdown-content card card-compact w-48 rounded-box bg-base-200 p-2 z-10 grid grid-cols-1">
                <div>
                  <ul>
                    <li className="text-lg font-medium">
                      <a href="/products/bags/bags">Bags</a>
                    </li>
                    <li>
                      <a href="/products/bags/handbag">Handbag</a>
                    </li>
                    <li>
                      <a href="/products/bags/crossbodybag">Crossbody bag</a>
                    </li>
                    <li>
                      <a href="/products/bags/backpack">Backpack</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li tabIndex={0} className="dropdown dropdown-hover">
              <a href="/products/accessories/accessories">ACCESSORIES</a>

              <div className="dropdown-content card card-compact w-48 rounded-box bg-base-200 p-2 z-10 grid grid-cols-2">
                <div>
                  <ul>
                    <li className="text-lg font-medium">
                      <a href="/products/accessories/accessories">
                        Accessories
                      </a>
                    </li>
                    <li>
                      <a href="/products/accessories/belts">Belts</a>
                    </li>
                    <li>
                      <a href="/products/accessories/hats">Hats</a>
                    </li>
                    <li>
                      <a href="/products/accessories/ties">Ties</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li tabIndex={0} className="dropdown dropdown-hover">
              <a href="/products/food/food">FOOD</a>

              <div className="dropdown-content card card-compact w-52 rounded-box bg-base-200 p-2 z-10 grid grid-cols-1">
                <div>
                  <ul>
                    <li className="text-lg font-medium">
                      <a href="/products/food/food">Food</a>
                    </li>
                    <li>
                      <a href="/products/food/snacks">Snacks</a>
                    </li>
                    <li>
                      <a href="/products/food/dryfood">Dry food</a>
                    </li>
                    <li>
                      <a href="/products/food/conveniencefood">
                        Convenience food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="my-3 w-4/5">
            <div className="relative flex w-full flex-wrap items-stretch">
              <form
                onSubmit={submitHandler}
                className="relative flex w-full flex-wrap items-stretch"
              >
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
                  id="basic-addon2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd"
                    />
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

export default CustomerNavbar
