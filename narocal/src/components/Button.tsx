import Link from 'next/link'

function Button(props) {
    if(props.link){
        return (
            <Link href={props.link}>
                <a className='btn mx-3  bg-black hover:bg-secondary border-none hover:text-white'>{props.children}</a>
            </Link>
        );
    }

    return (
        <button className='btn w-fit mx-3 bg-black hover:bg-secondary border-none hover:text-white' onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;