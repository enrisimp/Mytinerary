import React from 'react'

export default function Anchor({ href, title}) {
  return (
    <a href={href} className="flex aCenter jCenter orangeTr">{title}</a>
  )
}
