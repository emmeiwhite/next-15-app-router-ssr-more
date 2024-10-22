import Counter from '../components/Counter'

const url = 'https://jsonplaceholder.typicode.com/users'
export default async function Cabins() {
  // Page is a React Server Component, so we can fetch data directly from the server and then assemble the page on the server itself. Let's do a demo!
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)

  return (
    <div>
      <h1>Cabins Page</h1>

      <ul>
        {data.map(user => {
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>

      <Counter />
    </div>
  )
}
