export const metadata = {
  title: 'The Wild Oasis'
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
