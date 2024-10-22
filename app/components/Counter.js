'use client'
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>This is a React Client Component! </h2>
      <div>Current Count: {count}</div>

      <div>
        <h3> Always Remember a General Rule:</h3>
        <p>In Pure React: UI is the reflection of the Application State! </p>
        <p>And state updates trigger a re-render of the Component along with its children</p>
      </div>
    </div>
  )
}
