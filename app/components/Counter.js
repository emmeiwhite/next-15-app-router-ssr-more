'use client'
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>This is a React Client Component!</p>
    </div>
  )
}
