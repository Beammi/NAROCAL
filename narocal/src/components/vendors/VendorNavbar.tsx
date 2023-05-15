import React from "react"
import Link from "next/link"
interface INavBar {
  style?: string
  link: string
  text: string
}

function VendorNavbar(){
    return(
        <div className="navbar bg-primary">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-l text-alternative" href="/vendor">NAROCAL</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-3">
                    <li><a className="text-alternative hover:bg-secondary" href="/">Order</a></li>
                    <li><a className="text-alternative hover:bg-secondary" href="/">Chat</a></li>
                    <li><a className="text-alternative hover:bg-secondary" href="/vendor/profile">Profile</a></li>
                </ul>

            </div>
        </div>
    )
}

export default VendorNavbar