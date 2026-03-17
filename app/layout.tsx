import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '策研智對｜學會真正問 AI',
  description: '1 小時課程 × 智對框架 × 永久使用。讓 AI 從打字員變成你的軍師。',
  openGraph: {
    title: '策研智對｜學會真正問 AI',
    description: '同一個任務，問法不同，輸出天差地遠。1 小時學會智對框架。',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '策研智對｜學會真正問 AI',
    description: '同一個任務，問法不同，輸出天差地遠。',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
