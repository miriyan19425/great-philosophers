function PhilosopherDetails({selectedPhilosopher}){
	return(
		<section>
			<p>{selectedPhilosopher.name}</p>
			<p>Born: {selectedPhilosopher.born}</p>
			<p>Died: {selectedPhilosopher.died}</p>
			<p>Major field of contribution: {selectedPhilosopher.majorField}</p>
			<p>Fundamental Work: {selectedPhilosopher.fundamentalWork}</p>
			<p>Famous Quote: {selectedPhilosopher.famousQuote}</p>   
		</section>
	);
}

export default PhilosopherDetails;
