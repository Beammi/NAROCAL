import React from "react"
import Link from "next/link"
interface INavBar {
  style?: string
  link: string
  text: string
}

function InitialNavbar(){
    return(
        <div className="navbar bg-primary">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-l text-alternative" href="/">NAROCAL</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-3">
                    <li><a className="text-alternative hover:bg-secondary" href="/login">Log in</a></li>
                    <li><a className="text-alternative hover:bg-secondary" href="/role">Register</a></li>
                </ul>

            </div>
        </div>
    )
}

export default InitialNavbar