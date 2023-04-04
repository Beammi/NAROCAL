import Image from "next/image"
import P from "../components/text/P"
import React from "react"
import { useState } from "react"


interface DropDown {
  title: string
  option1: string
  option2?: string
  option3?: string
}

const DropDown: React.FunctionComponent<DropDown> = ({
  title,
  option1,
  option2,
  option3
}) => {
    const [open, setOpen] = useState(false);

    // const handleOpen = () => {
    //     setOpen(!open);
    // }

    function handleOpen(){
        setOpen(!open); // onClick
    }

    return (
        <div className="dropdown dropdown-hover">
            <div tabIndex={0} className="btn m-1 bg-primary">{title}<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div> 
            <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                <li>
                    <a>{option1}</a>
                </li> 
                <li>
                    <a>{option2}</a>
                </li> 
                <li>
                    <a>{option3}</a>
                </li>
            </ul>
        </div>
    )
}

export default DropDown