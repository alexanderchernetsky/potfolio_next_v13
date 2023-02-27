import React from "react";
import Head from "next/head";
import Image from 'next/image';

import PageTitle from "@/components/common/PageTitle";
import ButtonComponent from "@/components/common/Button/Button";
import SkillBlock from "@/components/specific/about/SkillBlock/SkillBlock";
import skills from "@/constants/about/skills";
import tools from "@/constants/about/tools";
import alex from "@/public/alex.jpg";

import styles from './styles.module.scss';


const About = () => {
  return (
    <React.Fragment>
      <Head>
        <title>About | Alex Chernetsky</title>
        <meta
          name="description"
          content="Alex Chernetsky - experienced frontend developer with a focus on React applications.
           Find out more about his expertise and experience within the IT industry."
        />
        <meta
          name="google-site-verification"
          content="B_oyNY7Nj-cESbBvN-hrxgz1HsbKpTGLSGL-_YWf-vY"
        />
      </Head>

      <div className={styles.aboutPageWrapper}>
        <main className={styles.contentWrapper}>
          <PageTitle title='About' />
          <section className={styles.mainInfoWrapper}>
            <div className={styles.aboutSection}>
              <div className={styles.photoWrapper}>
                <Image
                    alt="Alexander Chernetsky. Frontend developer"
                    src={alex}
                    width={300}
                    height={300}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                    placeholder='blur'
                />
              </div>
              <h2 className={styles.title}>Alex Chernetsky - Web Developer</h2>
              <p className={styles.text}>
                I&apos;m a frontend developer, who is passionate to creating
                stunning modern websites. I have worked on a multitude of web projects
                for a range of clients and have received numerous grateful
                testimonials from my clients. I look forward to speaking with
                you about your unique project, be it landing website or large
                and complicated web application.
              </p>
              <ButtonComponent
                text="Contact me"
                href="/contact"
                colorTheme="green"
              />
            </div>
            <div className={styles.aboutSection}>
              <h3 className={styles.skillsTitle}>Skills:</h3>
              <div className={styles.skillsBlocksWrapper}>
                {skills.map((item, index) => {
                  return <SkillBlock title={item} key={index} />;
                })}
              </div>
              <h3 className={styles.skillsTitle}>Tools:</h3>
              <div className={styles.skillsBlocksWrapper}>
                {tools.map((item, index) => {
                  return <SkillBlock title={item} key={index} />;
                })}
              </div>
            </div>
          </section>
        </main>
      </div>
    </React.Fragment>
  );
};

export default About;
