import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FormReplay — Record form fills once, replay everywhere',
  description: 'Browser extension that records form filling patterns and replays them across similar forms. Built for web developers and QA engineers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="18aa41b1-d5d9-4c37-9b9a-e25b1e21e54f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
