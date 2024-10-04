export const metadata = {
  title: 'Cabins'
}

export default async function Cabins() {
  // RSC : By Default
  // Fetching data in RSC: This is done on the server itself & not on the client side!

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
    </div>
  )
}
