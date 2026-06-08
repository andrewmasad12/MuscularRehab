import React from 'react'

export default function MotionLines() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-50">
      <span className="motion-line left-[6%] top-[18%] w-28 rotate-12" />
      <span className="motion-line right-[10%] top-[42%] w-36 -rotate-6" />
      <span className="motion-line bottom-[18%] left-[34%] w-24 rotate-3" />
    </div>
  )
}
