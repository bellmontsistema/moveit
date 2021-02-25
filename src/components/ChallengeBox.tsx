import { useContext } from "react";
import { ChallengesContext, ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/ChallengeBox.module.css"

export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChaleengeFaild() {
        resetChallenge();
        resetCountdown();
    }


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
                        onClick={handleChaleengeFaild}
                        >
                            <strong>Falhei</strong>
                        </button>

                        <button 
                        type="button"
                        className={styles.challengeSucceededButton}
                        onClick={handleChallengeSucceeded}
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