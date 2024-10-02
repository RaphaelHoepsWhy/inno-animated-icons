"use client"

import React from "react"
import { motion } from "framer-motion"
import { variants, variantsTail } from "./paths"

export const IconsFramerMotion = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={"100px"}
      height={"100px"}
      viewBox="0 0 24 24"
      initial="start"
      whileHover={"hover"}
    >
      <motion.path
        variants={variants[0]}
        stroke={"white"}
        strokeWidth={1.5}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      />
      <motion.path
        variants={variantsTail[0]}
        stroke={"white"}
        strokeWidth={1.5}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        fill={"transparent"}
      />
    </motion.svg>
  )
}
