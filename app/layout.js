import Logo from './components/Logo'
import Navigation from './components/Navigation'

export const metadata = {
  title: 'The Wild Oasis'
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>

        <main>{children}</main>

        <footer>&copy; copyright The Wild Oasis App</footer>
      </body>
    </html>
  )
}
