"use client";
 
// Visit https://kaif-ui.vercel.app/ for more components like this
 
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
 
interface PendulumProps {
  className?: string;
}
 
const Pendulum: React.FC<PendulumProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "w-full max-w-screen overflow-hidden h-screen flex items-start justify-center",
        className
      )}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Pendulum */}
        <motion.div
          className="pendulum flex flex-col items-center justify-center"
          style={{
            transformOrigin: "50% 0%",
          }}
          animate={{
            rotate: [60, -60, 60],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: [0.6, 0, 0.4, 1],
          }}
        >
          {/* Stick */}
          <div className="w-[1px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-gray-800"></div>
 
          {/* Ball */}
          <motion.div
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gray-800"
            style={{
              boxShadow: "inset 0 0 80px #1f2937, 0 0 30px rgba(31, 41, 55, 0.5)",
            }}
            animate={{
              boxShadow: [
                "inset 0 0 50px #1f2937, 0 0 20px rgba(31, 41, 55, 0.3)",
                "inset 0 0 80px #1f2937, 0 0 30px rgba(31, 41, 55, 0.5)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};
 
export default Pendulum;
