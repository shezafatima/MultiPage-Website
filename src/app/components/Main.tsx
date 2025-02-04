
"use client";

import { useState, useEffect, useRef } from "react";
import propertyData from "@/data/property.json";
import CardSlider from "@/app/components/Slider";
import Image from "next/image";

const properties = propertyData.property;

function useCounterAnimation(target: number, duration: number, startAnimation: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const increment = Math.ceil(target / (duration / 10));
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(interval);
        setCount(target);
      } else {
        setCount(start);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [startAnimation, target, duration]);

  return count;
}

function Main() {
  const [startAnimation, setStartAnimation] = useState(false);
  const counterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const refElement = counterRef.current;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.5 }
    );

    if (refElement) {
      observer.observe(refElement);
    }

    return () => {
      if (refElement) {
        observer.unobserve(refElement);
      }
    };
  }, []);

  const count1 = useCounterAnimation(11200, 1000, startAnimation);
  const count2 = useCounterAnimation(71, 6000, startAnimation);
  const count3 = useCounterAnimation(12000, 1000, startAnimation);

  return (
    <div className="bg-gray-800 pb-20">
      <div className="md:grid grid-cols-2 flex flex-col justify-center items-center md:mx-[6rem] mx-8">
        <div>
          <h1 className="text-center md:text-7xl text-4xl text-white tracking-wide font-bold mt-[8rem] mx-8 sm:mx-12">
            We Are Here For You
          </h1>
          <div className="mt-20 sm:ml-12 relative flex ">
          <Image
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
              alt="customers"
              width={1000}
                            height={1000}
                            className="w-[4rem] h-[4rem] rounded-full border"
            />
            <Image
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              alt="customers"
              width={64}
              height={64}
                
              className="-ml-4  rounded-full border"
            />
            <Image
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              alt="customers"
                   width={1000}
              height={1000}
              className="-ml-4 w-[4rem] h-[4rem] rounded-full border"
            />
            <Image
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="customers"
                   width={1000}
              height={1000}
              className="-ml-4 w-[4rem] h-[4rem] rounded-full border"
            />
            <Image
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
              alt="customers"
                    width={1000}
              height={1000}
              className="-ml-4 w-[4rem] h-[4rem] rounded-full border"
            />
            <Image
              src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80"
              alt="customers"
                    width={1000}
              height={1000}
              className="-ml-4 w-[4rem] h-[4rem] rounded-full border"           />
            <div className=" -ml-4 w-[4rem] h-[4rem] rounded-full border bg-slate-300 text-center">
              <div className="text-center mt-4 font-bold text-xl">+40</div>
            </div>
          </div>
        </div>
        <div>
          <p className="mt-[8rem] md:text-md text-white md:mx-0 mx-10 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div ref={counterRef} className="flex justify-center space-x-12 md:space-x-0 md:grid grid-cols-3 mt-8">
            <div>
              <h1 className="text-white md:text-6xl text-2xl font-semibold">{count1.toLocaleString()}</h1>
              <p className="text-white text-xs mt-1 text-center">Lorem ipsum</p>
            </div>
            <div className="md:ml-4">
              <h1 className="text-white md:text-6xl text-2xl font-semibold md:ml-4">{count2}%</h1>
              <p className="text-white text-xs mt-1 text-center">Lorem ipsum</p>
            </div>
            <div>
              <h1 className="text-white md:text-6xl text-2xl font-semibold">{count3.toLocaleString()}</h1>
              <p className="text-white text-xs mt-1 text-center">Lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-20">
        <h1 className="text-white md:text-5xl text-2xl tracking-wide font-bold md:mx-[16rem] text-center">
          All The Best Properties From Us For You
        </h1>
        <p className="text-white text-md mt-4 flex justify-center items-center text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <CardSlider properties={properties} />
    </div>
  );
}

export default Main;
