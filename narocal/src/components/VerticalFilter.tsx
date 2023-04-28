import Image from "next/image"
import P from "../components/text/P"
import ProfilePicTemp from "../pages/assets/profile_pic_temp.png"
import { useState } from "react"

interface VerticalFilter {
  title1: string
  option11: string
  option12?: string
  option13?: string
  option14?: string
  option15?: string

  title2: string
  option21: string
  option22?: string
  option23?: string
  option24?: string
  option25?: string

  title3: string
  option31: string
  option32?: string
  option33?: string
  option34?: string
  option35?: string

  
}

const VerticalFilter: React.FunctionComponent<VerticalFilter> = ({
  title1,
  option11,
  option12,
  option13,
  option14,
  option15,

  title2,
  option21,
  option22,
  option23,
  option24,
  option25,

  title3,
  option31,
  option32,
  option33,
  option34,
  option35,
}) => {

    const [openOp1, setOpenOp1] = useState(false)
    const [openOp2, setOpenOp2] = useState(false)
    const [openOp3, setOpenOp3] = useState(false)
    const [openOp4, setOpenOp4] = useState(false)
    const [openOp5, setOpenOp5] = useState(false)

    function handleOpen1(){
        setOpenOp1(!openOp1)
    }

    function handleOpen2(){
        setOpenOp2(!openOp2)
    }

    function handleOpen3(){
        setOpenOp3(!openOp3)
    }

    function handleOpen4(){
        setOpenOp4(!openOp4)
    }

    function handleOpen5(){
        setOpenOp5(!openOp5)
    }

    return (
        <>
            <ul className='w-3/12 mr-26 text-md'>
                <li>
                    <button onClick={handleOpen1} className="flex gap-4">{title1} 
                        <svg id="icon1" className="transform rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    
                    {(openOp1) &&
                        <ul className="ml-6">
                            <li><a>{option11}</a></li>
                            <li><a>{option12}</a></li>
                            <li><a>{option13}</a></li>
                            <li><a>{option14}</a></li>
                            <li><a>{option15}</a></li>
                        </ul>
                    }
                    
                    
                </li>

                <li>
                    <button onClick={handleOpen2} className="flex gap-4">{title2} 
                        <svg id="icon1" className="transform rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    
                    {(openOp2) &&
                        <ul className="ml-4">
                            <li><a>{option21}</a></li>
                            <li><a>{option22}</a></li>
                            <li><a>{option23}</a></li>
                            <li><a>{option24}</a></li>
                            <li><a>{option25}</a></li>
                        </ul>
                    }
                    
                    
                </li>

                <li>
                    <button onClick={handleOpen3} className="flex gap-4">{title3} 
                        <svg id="icon1" className="transform rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    
                    {(openOp3) &&
                        <ul className="ml-4">
                            <li><a>{option31}</a></li>
                            <li><a>{option32}</a></li>
                            <li><a>{option33}</a></li>
                            <li><a>{option34}</a></li>
                            <li><a>{option35}</a></li>
                        </ul>
                    }
                    
                    
                </li>

                {/* <li>Color</li>
                <li>Price</li> */}
            </ul>
        </>
    )
}

export default VerticalFilter