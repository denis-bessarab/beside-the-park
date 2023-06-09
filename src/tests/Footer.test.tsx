import { render, screen } from '@testing-library/react';
import Footer from "../components/Footer/Footer";


test('Footer component renders correctly', () => {
	render(<Footer />);
	const footerElement:HTMLElement = screen.getByText("LOREM IPSUM ©2021")
	expect(footerElement).toBeInTheDocument();
});
