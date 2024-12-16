
"use client";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

function Hero() {
  // Animation variants
  const riseVariant = {
    hidden: { opacity: 0, y: 60 }, // Start off-screen
    visible: {
      opacity: 1,
      y: 0, // Move to final position
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-opacity-50"></div>
      <Navbar />

      {/* Content */}
      <div className="relative z-10 md:grid md:grid-cols-2 flex flex-col items-center justify-center h-full text-center   text-white">
        {/* Animated Heading */}
        <motion.h1
          className="md:text-6xl text-4xl font-bold tracking-wide mx-6 flex items-center"
          variants={riseVariant}
          initial="hidden"
          animate="visible"
        >
          Discover Your Dream Home With Smart Living
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="mx-8 text-lg flex items-center md:mt-0 mt-4 "
          variants={riseVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }} // Delay for smoother effect
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          odit iusto necessitatibus qui minus hic dolores omnis illo, reiciendis
          autem fugiat a pariatur repellendus neque dolorem dolor accusamus
          adipisci. Fuga.
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;

