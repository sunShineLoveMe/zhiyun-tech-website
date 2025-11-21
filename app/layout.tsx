import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import type { Metadata } from 'next';
import { ThemeProvider } from '../contexts/ThemeContext';
import { LanguageProvider } from '../contexts/LanguageContext';
import CozeChat from '../components/CozeChat';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: '栉云科技 - AI应用与智能体开发',
  description: '栉云科技专注于AI应用和智能体开发，为企业和个人提供先进的人工智能解决方案。',
  keywords: 'AI, 人工智能, 智能体, 上海栉云科技, 栉云科技, AI应用开发',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7394339745662137"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <Providers>
          {children}
          <CozeChat />
        </Providers>
      </body>
    </html>
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </LanguageProvider>
  );
} 
