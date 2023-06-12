import { render, screen } from '@testing-library/react';
import Header from "../components/Header/Header";

test('Header component renders correctly', () : void => {

	render(<Header/>)

	const heading:HTMLElement = screen.getByRole('heading',{'level':1})
	expect(heading).toBeInTheDocument()

	const blueFill:HTMLElement = screen.getByTestId('blue-fill')
	expect(blueFill).toBeInTheDocument()

	const headingSpan:HTMLElement = screen.getByTestId('header-span')
	expect(headingSpan).toBeInTheDocument()
});
