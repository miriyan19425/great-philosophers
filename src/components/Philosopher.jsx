import styles from './Header.module.css';

function Philosopher({philosopher, handleOnClick}) {
  return (
		<>
			<img src={philosopher.image} alt={philosopher.name} width={philosopher.width} height={philosopher.height} className={styles.pic}/>
			<p className={styles.name}>{philosopher.name}</p>
			<button type='button' onClick={handleOnClick} className={styles.moreButton}>More</button>
		</>
	);
}

export default Philosopher;
