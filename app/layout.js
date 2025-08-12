import './globals.css'

export const metadata = {
  title: 'Fixed Deployment Test',
  description: 'This test verifies that our main branch commits properly trigger Vercel deployments.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
