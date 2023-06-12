import React from 'react';
import './header.scss';

function Header() : React.JSX.Element {

	return (
		<header id="header">
			<h1>LOREM <span data-testid="header-span">IPSUM</span></h1>
			<div className="blue-fill" data-testid="blue-fill"></div>
		</header>
	);
}

export default Header;