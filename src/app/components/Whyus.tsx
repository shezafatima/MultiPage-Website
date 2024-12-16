import Image from "next/image";

function Whyus() {
  return (
    <div>

    <div className="sm:grid grid-cols-2 sm:gap-16 flex flex-col gap-4 justify-center items-center bg-white mt-20 sm:mx-[8rem]">
      <div>
        <Image
          src="/women.jpg"
          alt="house"
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>
      <div className="sm:block flex justify-center items-center flex-wrap sm:mx-0 mx-8">
        <h1 className="md:text-4xl text-2xl md:font-bold font-semibold tracking-wide text-gray-600  text-center">
          Discover The Unmatched Benefits Of Choosing Clay Global For Your Dream
          House
        </h1>
        <p className="text-lg mt-2 text-center text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          voluptatum vero placeat quasi, minima ex accusantium dolor animi
          dolorem repellat illo tempora, nisi eveniet, labore minus nesciunt.
          Illo assumenda voluptas, eos sapiente officia eius earum quis? Sit
         
        </p>
      </div>
      </div>
      <div  className=" mt-20 relative h-[27rem] w-full bg-cover bg-center"
      style={{
          backgroundImage: "url('/luxury1.jpg')",
        }}>
     <div className="relative z-10 flex flex-col items-center justify-center flex-wrap text-center">
        <h1 className="md:mt-[10rem] mt-20 text-center text-white font-bold md:text-5xl text-3xl tracking-wide ">Discover Your Smart Home Today</h1>
        <p className="md:text-xl text-lg text-white mt-2 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, voluptatem?</p>
        <div className=" sm:grid grid-cols-2 flex flex-col mt-4 gap-6"> 
        <button className="bg-white  text-black px-6 py-2  border rounded-md hover:bg-transparent hover:text-white hover:border-white">Book now  &#8594;</button>
        <button className="hover:bg-white  hover:text-black px-5 py-2  border rounded-md bg-transparent text-white border-white">Contact now  &#8594;</button>



        </div>
     </div>
      </div>
          </div>
  );
}

export default Whyus;
