import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css"


export function Profile() {

    const { level } = useContext(ChallengesContext)

    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/43611589?s=460&u=118b79ca317b4de43b19eb0ed0820d3799af9754&v=4" alt="Henrique Teixeira"/>
            <div>
                <strong>Henrique Teixeira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}