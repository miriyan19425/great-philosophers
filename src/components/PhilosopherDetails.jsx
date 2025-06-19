import styles from './PhilosopherDetails.module.css';

function PhilosopherDetails({selectedPhilosopher}){
	return(
		<section className={styles.details}>
			<p className={styles.detail}>{selectedPhilosopher.name}</p>
			<p className={styles.detail}>Born: {selectedPhilosopher.born}</p>
			<p className={styles.detail}>Died: {selectedPhilosopher.died}</p>
			<p className={styles.detail}>Major field of contribution: {selectedPhilosopher.majorField}</p>
			<p className={styles.detail}>Fundamental Work: {selectedPhilosopher.fundamentalWork}</p>
			<p className={styles.detail}>Famous Quote: {selectedPhilosopher.famousQuote}</p>   
		</section>
	);
}

export default PhilosopherDetails;
