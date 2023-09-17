"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
export default function ResumeLayout({children}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ scale: .9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.2, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
