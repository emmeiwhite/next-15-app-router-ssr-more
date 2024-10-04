'use client'
import { useState } from 'react'

export default function Counter({ users }) {
  console.log('use client directive!')
  console.log(users)
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <button onClick={() => setCounter(c => c + 1)}>{counter}</button>
      <h3>There are a total of {users.length} users</h3>

      {users.map(user => {
        return <div key={user.id}>{user.name}</div>
      })}
    </div>
  )
}
