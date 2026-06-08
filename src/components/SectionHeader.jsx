import React from 'react'

export default function SectionHeader({ eyebrow, title, body, align = 'left' }) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {body && <p className="mt-4 text-base leading-8 text-current opacity-75 sm:text-lg">{body}</p>}
    </div>
  )
}
