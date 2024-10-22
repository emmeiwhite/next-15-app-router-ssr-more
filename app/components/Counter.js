'use client'
import { useState } from 'react'

export default function Counter({ users }) {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>This is a React Client Component! </h2>
      <div>
        Current Count: <strong>{count}</strong>
      </div>

      <button onClick={() => setCount(c => c + 1)}>update count</button>

      {/* <div>
        <h3> Always Remember a General Rule:</h3>
        <p>In Pure React: UI is the reflection of the Application State! </p>
        <p>And state updates trigger a re-render of the Component along with its children</p>
      </div> */}
      <ul>
        {users.map(user => {
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </div>
  )
}
