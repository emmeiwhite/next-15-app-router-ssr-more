import Link from 'next/link'

export default function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/about">Account</Link>
        </li>

        <li>
          <Link href="/about">Cabins</Link>
        </li>
      </ul>
    </div>
  )
}
