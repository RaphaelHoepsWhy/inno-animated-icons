"use client"

import React from "react"
import { motion } from "framer-motion"
import { variants } from "./paths"

const pathTransition = {
  duration: 1,
  repeat: Infinity,
  repeatType: "reverse" as "reverse",
  ease: [0.45, 0, 0.6, 1],
}

export const IconsFramerMotion = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={"100px"}
      height={"100px"}
      viewBox="0 0 24 24"
      initial="start"
      whileHover={"end"}
    >
      <motion.path
        transition={{ ...pathTransition }}
        variants={variants[0]}
        stroke={"white"}
        strokeWidth={1.5}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      />
      <motion.path
        d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267"
        stroke={"white"}
        strokeWidth={1.5}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      />
    </motion.svg>
  )
}
