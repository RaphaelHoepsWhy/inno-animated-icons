"use client"
import React, { FC, useState } from "react"
import UseAnimations from "react-useanimations"
import github from "react-useanimations/lib/github"
import twitter from "react-useanimations/lib/twitter"
import settings2 from "react-useanimations/lib/settings2"

const IconsUnseAnimations: FC = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div className="fix-use-animations flex gap-4 pl-8">
      <UseAnimations
        animation={github}
        size={56}
        strokeColor="currentColor"
        loop
      />
      <UseAnimations
        animation={twitter}
        size={56}
        strokeColor="currentColor"
        loop
      />
      <UseAnimations
        wrapperStyle={{ cursor: "pointer" }}
        reverse={checked}
        onClick={() => {
          setChecked(!checked)
        }}
        animation={settings2}
        strokeColor="currentColor"
        size={56}
      />
    </div>
  )
}

export default IconsUnseAnimations
