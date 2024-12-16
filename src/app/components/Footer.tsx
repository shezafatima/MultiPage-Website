import Link from "next/link";
function Footer() {
  return (
    <div>
      <div
        className=" mt-20 relative md:h-[24rem]  w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/last.jpg')",
        }}
      >
        <div className="relative z-10 lg:grid grid-cols-3 flex flex-col flex-wrap mx-8  justify-center items-center  md:mx-[5rem] py-16">
          <div>
            <h1 className="text-white font-bold">Clay Global</h1>
            <p className="sm:w-[30rem]  text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              asperiores quam distinctio officia illum esse, rerum tempore
              voluptatibus, odit unde quisquam voluptate? Sapiente nemo ad
              minima molestiae quis temporibus fugit praesentium officia, iusto
              blanditiis placeat quisquam deleniti dicta asperiores dignissimos
              maiores libero odio debitis ipsam! Velit sapiente laborum id unde.
            </p>
          </div>
          <div className="col-span-1"></div>
          <div className="grid grid-cols-2 gap-3 md:mt-0 mt-4">

          <div className="flex flex-col text-white">
<h1 className="font-bold">Quick Links</h1>
<Link href="">Sign up</Link>
<Link href="">Book now</Link>
<Link href="">Contact us</Link>
          </div>
          <div  className="flex flex-col text-white mt-7 ">
            <Link href="">Home</Link>
            <Link href="">About us</Link>
            <Link href="">Properties</Link>
          </div>
          </div>
        </div>
        <hr />
        <h1 className="text-white mx-[5rem] font-bold md:my-6 md:mt-4 mt-2">&#169; All rights reserved 2024 by Clay Global</h1>
      </div>
    </div>
  );
}
export default Footer;
