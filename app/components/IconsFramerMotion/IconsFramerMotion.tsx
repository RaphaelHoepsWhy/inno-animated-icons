"use client"

import React from "react"
import { motion } from "framer-motion"
import { variants, variantsTail } from "./paths"

export const IconsFramerMotion = () => {
  return (
    <div className="flex gap-8 pl-8">
      {variants.map((variant, index) => (
        <motion.svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width={"48px"}
          height={"48px"}
          viewBox="0 0 24 24"
          initial="start"
          whileHover={"hover"}
        >
          <motion.path
            variants={variant}
            stroke={"white"}
            strokeWidth={2}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            fill={"transparent"}
          />
          <motion.path
            variants={variantsTail[index]}
            stroke={"white"}
            strokeWidth={2}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            fill={"transparent"}
          />
        </motion.svg>
      ))}
    </div>
  )
}
