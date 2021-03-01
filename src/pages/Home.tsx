import { GetServerSideProps } from "next";
import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { DarkModeButton } from "../components/DarkModeButton";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";
import { DarkThemeProvider } from "../contexts/DarkThemeContext";

import styles from "../styles/pages/Home.module.css";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  darkTheme: boolean;
}

export default function Home(props: HomeProps) {
  // console.log(props);

  return (
    <DarkThemeProvider darkTheme={props.darkTheme}>
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <div className={styles.container}>
          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile>
                  <DarkModeButton />
                </Profile>

                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </ChallengesProvider>
    </DarkThemeProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // chamada api antes do browser construir o html/css/js
  // é executado no server
  // const user = {
  //   level: 1,
  //   currentExperience: 50,
  //   challengesCompleted: 2,
  // };

  const {
    level,
    currentExperience,
    challengesCompleted,
    darkTheme,
  } = context.req.cookies;

  // console.log(user);

  return {
    // props: user,
    props: {
      level: Number(level), // same as -> level: +level;
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      darkTheme: Boolean(darkTheme == "true"),
    },
  };
};
