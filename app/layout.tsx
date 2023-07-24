import './globals.css';
import { Poppins, Inter, Bowlby_One } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '100', '400', '200', '500', '600', '700', '800', '900'],
  variable: '--poppins',
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '100', '400', '200', '500', '600', '700', '800', '900'],
  variable: '--Inter',
});
const bowlby = Bowlby_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--bowlby',
});

export const metadata = {
  title: 'Cheers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${poppins.className} ${poppins.variable} ${inter.variable} ${bowlby.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
