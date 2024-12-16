"use client";
import { MdMenu } from "react-icons/md";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  return (
    <nav>
      <div className=" justify-between ">
        <div
          className="hidden w-full md:block md:w-auto  backdrop-blur-md bg-opacity-30 top-0 "
          id="navbar-default"
        >
          <div
            className="hidden md:flex  justify-between items-center py-5  "
            
          >
            <ul className="flex justify-evenly items-start  space-x-10 text-white text-md ">
              <li>
                <Link href="/" className="block ml-8" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#About" className="block">About</Link>
              </li>
              <li>
                <Link href="#testimonial" className="block">Testimonial</Link>
              </li>
              <li>
                <Link href="/contact" className="block">Contact us</Link>
              </li>
            </ul>
            {/* <div className="text-white text-xl uppercase font-bold">Clay Global</div> */}
            <div className="mr-8 block">
              <button className="bg-white border text-black px-6 py-2 rounded-md hover:bg-transparent hover:text-white hover:border-white">
                Sign up &#8594;
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end md:hidden">
        <Sheet>
  <SheetTrigger className="text-white text-3xl p-4">
<MdMenu />
  </SheetTrigger>
  <SheetContent>
    <SheetHeader className="text-black text-lg  px-8 flex flex-col justify-center items-center space-y-6">
      <Link href="/">
      <SheetTitle>Home</SheetTitle>
      </Link>
    
      <Link href="#About">
      <SheetTitle>About</SheetTitle>
      </Link>
    
      <Link href="#testimonial">
      <SheetTitle>Testimonial</SheetTitle>
      </Link>
    
      <Link href="/contact">
      <SheetTitle>Contact</SheetTitle>
      </Link>
    
    </SheetHeader>
  </SheetContent>
</Sheet>

        </div>
      </div>
      
    </nav>
  );
}


export default Navbar;
