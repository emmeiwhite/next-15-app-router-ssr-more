// import { useState } from 'react'

import Counter from '../components/Counter'

export const metadata = {
  title: 'Cabins'
}

export default async function Cabins() {
  // RSC : By Default
  // Fetching data in RSC: This is done on the server itself & not on the client side!
  //   const [random, setRandom] = useState(123): Note we cannot use hooks in RSC

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  console.log(data)
  return (
    <div>
      <h3>Cabins - The Wild Oasis</h3>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <Counter users={data} />
    </div>
  )
}
