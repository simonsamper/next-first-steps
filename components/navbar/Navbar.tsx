import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"


const NavItems = () => [
    { path: '/about', text: 'About',  },
    { path: '/pricing', text: 'Pricing',  },
    { path: '/contact', text: 'Contact',  },
]


export const Navbar = () => {

  // This is a simple Navbar component
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">

        <Link href={"/"} className="flex items-center mr-2">
        <HomeIcon className='mr-2'/>
        <span>Home</span>
        </Link>

        <div className="flex flex-1"></div>

        {
            NavItems().map(navItem =>(
                <Link key={navItem.path}className="mr-2" href={navItem.path}>{navItem.text}</Link>
            ))
        }    

    </nav>
  )
}
