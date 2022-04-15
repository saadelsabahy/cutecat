import { render, screen, userEvent } from '../test-utils';
import App from './App';
import { useAppDispatch } from './hooks/redux.hooks';
import { moods } from './moods';
import { changeMood } from './redux/slices/cat.slice';
import { store } from './redux/store';

describe('cat', () => {
	it('should render App component', () => {
		render(<App />);
		expect(screen.getByTestId('app-container')).toBeInTheDocument();
	});
	it('should render buttons ', () => {
		render(<App />);
		const buttons = screen.getAllByRole('button');
		expect(buttons.length).toBe(Object.values(moods).length);
	});
	it('initial mode to be sad ', () => {
		let { mood } = store.getState().cat;
		expect(mood).toBe('sad');
	});
	it('should update state in slice correctly', async () => {
		render(<App />);
		Object.values(moods).forEach((mood) => {
			userEvent.click(screen.getByText(mood));
			store.dispatch(changeMood(mood));
			expect(store.getState().cat.mood).toBe(mood);
		});
	});
});
