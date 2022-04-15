import { Cat, KawaiiMood } from 'react-kawaii';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux.hooks';
import { moods } from './moods';
import { changeMood } from './redux/slices/cat.slice';
function App() {
	const dispatch = useAppDispatch();
	const { mood: catMood } = useAppSelector((state) => state.cat);
	const onMoodUpdate = (mood: KawaiiMood) => {
		console.log(mood);
		dispatch(changeMood(mood));
	};
	return (
		<div className='app__div__center' data-testid={'app-container'}>
			<Cat size={320} mood={catMood} color='#596881' />
			<section>
				{Object.values(moods).map((mood) => (
					<button
						key={mood}
						className={`${catMood === mood ? 'active' : ''}`}
						onClick={() => onMoodUpdate(mood as KawaiiMood)}
					>
						{mood}
					</button>
				))}
			</section>
		</div>
	);
}

export default App;
