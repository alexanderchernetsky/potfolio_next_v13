import { Raleway } from '@next/font/google';

import Header from '../components/common/Header';

import './globals.css';
import styles from './layout.module.scss';

const raleway = Raleway({
  variable: '--raleway-font',
  subsets: ['latin']
});

export const metadata = {
  title: 'Frontend Developer Portfolio',
  description: 'Alexander Chernetsky - a frontend web developer from Manchester, UK',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <div className={styles.layoutWrapper}>
          <Header />
          <main className={styles.mainContentWrapper}>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
