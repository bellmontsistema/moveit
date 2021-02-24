import { useContext } from "react";
import { ChallengesContext, ChallengesProvider } from "../contexts/ChallengesContext";
import styles from "../styles/components/ChallengeBox.module.css"

export function ChallengeBox() {

    const { activeChallenge, resetChallenge } = useContext(ChallengesContext);


    return(
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} XP</header>
                    <main>
                    <img src={`icons/${activeChallenge.type}.svg`} alt="Imagem"/>
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>

                        <button 
                        type="button"
                        className={styles.challengeFailedButton}
                        onClick={resetChallenge}
                        >
                            <strong>Falhei</strong>
                        </button>

                        <button 
                        type="button"
                        className={styles.challengeSucceededButton}
                        >
                            <strong>Completei</strong>
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>
                        Finalize um ciclo para receber desafios
                    </strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level UP"/>
                        Avance de Level Para Completar Desafios.
                    </p>
                </div>
            ) }
        </div>
    );
}