import { motion } from "framer-motion";
import Logo from "../assets/Logo.svg"; // your existing logo

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.img
        src={Logo}
        alt="Prima Logo"
        className="h-24 w-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}