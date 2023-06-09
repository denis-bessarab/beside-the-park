import { render, screen } from '@testing-library/react';
import App from '../App';

jest.mock('../components/Header/Header');
jest.mock('../components/Heading/Heading');
jest.mock('../components/EpisodesList/EpisodesList');

describe('App rendered correctly',() : void => {

  test('App section rendered correctly', () : void => {
    render(<App />);
    const appSection:HTMLElement = screen.getByTestId('app-section')
    expect(appSection).toBeInTheDocument();
  });

  test('Header component rendered inside App correctly',(): void => {
    render(<App/>)
    const headerComponent:HTMLElement = screen.getByText("Header")
    expect(headerComponent).toBeInTheDocument();
  })
  test('Heading component rendered inside App correctly',(): void => {
    render(<App/>)
    const headingComponent:HTMLElement = screen.getByText("Heading")
    expect(headingComponent).toBeInTheDocument();
  })

  test('Episodes List component rendered inside App correctly',() : void => {
    render(<App/>)
    const episodesList:HTMLElement = screen.getByText("Episodes List")
    expect(episodesList).toBeInTheDocument();
  })

  test('Footer component rendered inside App correctly',(): void => {
    render(<App/>)
    const footerComponent:HTMLElement = screen.getByTestId("footer")
    expect(footerComponent).toBeInTheDocument();
    expect(footerComponent).toHaveClass('Footer');
  })
})

