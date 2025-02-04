import testimonialData from "@/data/testimonial.json";
import Image from "next/image";

interface Testimonials {
    id:number;
  name: string;
  location: string;
  rating: string;
  testimonial: string;
  image: string;
}

function Testimonial() {
  return <div id="testimonial">
    <div className="flex justify-center items-center flex-col mt-20 md:mx-0 mx-4 ">
    <h1 className="md:text-6xl text-3xl font-bold text-gray-700 tracking-wide text-center">Customer Testimonials</h1>
    <p className="mt-2  text-center text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, modi?</p>

    </div>
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:mx-[8rem] mx-8 gap-8 my-20">

    {testimonialData.testimonial.map((testimonial:Testimonials)=>(
    
    <div key={testimonial.id}  className=" p-4 bg-white shadow-lg card border rounded-lg overflow-hidden flex flex-col h-full">
<div className="flex flex-wrap">

<Image width={1000} height={1000} src={testimonial.image} alt={testimonial.name} className="w-[5rem] h-[5rem] rounded-full border"/>
<h1 className="flex justify-center items-center ml-8 font-bold text-lg">{testimonial.name}</h1>
</div>
<Image width={1000} height={1000} src={testimonial.rating} alt={testimonial.name} className="w-[8rem] flex justify-center items-center mt-2"/>
<p className="mt-2 text-center">{testimonial.testimonial}</p>
<p className="flex justify-end text-gray-500 mt-2">{testimonial.location}</p>
    </div>
    ))}
    </div>

  </div>;
}

export default Testimonial;
