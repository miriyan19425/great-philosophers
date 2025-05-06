function Philosopher({philosopher, handleOnClick}) {
  return (
		<>
			<img src={philosopher.image} alt={philosopher.name} width={philosopher.width} height={philosopher.height} />
			<p>{philosopher.name}</p>
			<button type='button' onClick={handleOnClick}>More</button>
		</>
	);
}

export default Philosopher;
