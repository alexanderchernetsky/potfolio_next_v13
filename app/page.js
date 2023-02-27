import React from 'react';

import Button from '../components/common/Button/Button';

import styles from './page.module.scss';


export default function Home() {
    // todo
    const onBtnClickHandler = () => {};

    return (
      <section className={styles.homePageWrapper}>
          <div className={styles.contentWrapper}>
              <h1 className={styles.title}>
                  Hello! I&apos;m <span className={styles.name}>Alex Chernetsky</span>,
                  <br /> a frontend web developer based in Manchester, UK.
              </h1>
              <div className={styles.buttonWrapper}>
                  <Button
                      text="View my work"
                      href="/portfolio"
                  />
              </div>
          </div>
      </section>
  )
}
