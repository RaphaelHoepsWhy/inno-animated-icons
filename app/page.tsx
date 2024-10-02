import { IconsFramerMotion } from "./components/IconsFramerMotion/IconsFramerMotion"
import IconsUnseAnimations from "./components/IconsUnseAnimations"

export default function Home() {
  return (
    <div className="flex min-h-screen p-8 text-white">
      <div>
        <h2 className="pb-8 font-mono text-xl text-gray-400">
          Based on react-useanimations
        </h2>

        <IconsUnseAnimations />
        <h2 className="pb-8 pt-16 font-mono text-xl text-gray-400">
          Based on AI generated svg paths
        </h2>
        <IconsFramerMotion />
      </div>
    </div>
  )
}
