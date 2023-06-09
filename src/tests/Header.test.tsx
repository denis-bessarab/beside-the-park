import { render, screen } from '@testing-library/react';
import Header from "../components/Header/Header";

describe('Header component renders correctly', () : void => {

	test('renders correctly for mobile screens', () => {
		Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 320})
		render(<Header />);
		const headerComponent:HTMLElement = screen.getByText('LOREM IPSUM')
		expect(headerComponent).toBeInTheDocument()
	});

	test('renders correctly for desktop screens', () => {
		Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 1920})
		render(<Header />);
		const headerComponent:HTMLElement = screen.getByText('LOREM')
		expect(headerComponent).toBeInTheDocument()
	});
});
