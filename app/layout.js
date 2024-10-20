export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>I am the Header</header>
        {children}
        <footer>I am a Footer</footer>
      </body>
    </html>
  )
}
