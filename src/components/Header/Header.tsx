import React, {useEffect, useState} from 'react';
import './header.scss';

function Header() : React.JSX.Element {

	const [screenSize,setScreenSize] = useState<number>(window.innerWidth)

	const handleResize = () : void => {
		setScreenSize(window.innerWidth)
	}

	useEffect(() => {
		window.addEventListener('resize',handleResize)
	},[])

	return (
		<header id="header">
			<h1>{(screenSize >= 768) ? "LOREM" : "LOREM IPSUM"}</h1>
			{(screenSize >= 1024) && <div className="blue-fill"></div>}
		</header>
	);
}

export default Header;