import { ReactNode, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

interface ProfileProps {
  children: ReactNode;
}

export function Profile({children}: ProfileProps) {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/samuel-mota.png" alt="Samuel Mota" />
      <div>
        <strong>Samuel Mota</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
      {children}
    </div>
  );
}
