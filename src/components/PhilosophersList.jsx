import Philosopher from './Philosopher';
import styles from './PhilosophersList.module.css';

function PhilosophersList({philosophers, handleSelect}){
	return <ul className={styles.list}>{ philosophers.map( phil => <li className={styles.item} key={phil.name}><Philosopher philosopher={phil} handleOnClick={() => handleSelect(phil)} /></li> ) }</ul>;
}

export default PhilosophersList;
