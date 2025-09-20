import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});

export const metadata = {
  title: 'Remit4me',
  description: 'Remit4me'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${montserrat.className}`}>{children}</body>
    </html>
  );
}
