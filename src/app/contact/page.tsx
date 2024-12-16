import Image from "next/image"
export default function Contact(){
    return(
        <div className="bg-gray-700 h-screen">
            <div className="lg:grid lg:grid-cols-2 flex flex-col justify-center items-centerflex-wrap pt-20 px-12">
                <div>
                    <p className="text-white ">Contact us</p>
                    <h1 className="md:text-6xl text-4xl text-white tracking-wide mt-2 font-bold">Get In Touch</h1>
                    <p className="text-white mt-4 text-wrap">Feel Free to contact!</p>

                    <form action="" className="flex flex-col md:w-[35rem] sm:w-[30rem] space-y-2 mt-4 mx-6">
                        <label htmlFor="name" className="text-white text-lg">Name</label>
                        <input type="text" className="bg-transparent border-white outline-white border"  />
                        <label htmlFor="email" className="text-white text-lg">Email</label>
                        <input type="text" className="bg-transparent border-white outline-white border" />
                        <label htmlFor="" className="text-white text-lg">Message</label>
                        <textarea id="subject" name="subject"  className="h-[10rem] bg-transparent border-white outline-white border"></textarea>
                    </form>
                        <button type="submit" className="md:ml-0 ml-6 bg-white text-gray-800 py-2 px-6 rounded-md hover:bg-transparent hover:text-white border hover:border-white  flex justify-start items-start mt-6">Submit</button>
                </div>
                <div>
                    <Image
                    src="/contact.png"
                    alt="contact"
                    width={1000}
                    height={1000}
                    className="rounded-lg lg:block hidden overflow-hidden" />
                </div>

            </div>

        </div>
    )
}