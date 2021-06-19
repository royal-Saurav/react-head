import React from 'react';
import '../include/style.css';

function Header(){
	return (
			<>
				<input type="checkbox" id="menu" />
				<nav>
					<label>React Dev</label>
					<ul>
						<li><a href="#">Logout</a></li>
					</ul>
					<label for="menu" className="menu-bar">
						<i className="fa fa-bars"></i>
					</label> 
				</nav>	
			</>
		)	
}

export default Header;