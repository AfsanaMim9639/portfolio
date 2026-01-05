// app/layout.js
import './globals.css'

export const metadata = {
  title: 'Full Stack Developer Portfolio',
  description: 'Building modern web applications with AI/ML integration',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}