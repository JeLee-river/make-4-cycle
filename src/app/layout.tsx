import './globals.css';
import type { Metadata } from 'next';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Make A Cycle',
  description:
    "Let's make a material cycle for our planet. We will guide you on how to properly recycle in 4 steps.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://statics.goorm.io/fonts/GoormSans/v1.0.0/GoormSans.min.css'
        />
      </head>
      <body>
        <div className='flex flex-col'>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
