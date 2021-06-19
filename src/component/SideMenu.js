import React from 'react';
import '../include/font.css';

function SideMenu(){
	return (
			<>
				<div className="side-menu">
					<center>
						<img src="images/shivji.jpg" alt="Profile" />
						<br /><br />
						<h2>React Dev</h2>
					</center>
					<br />
					<a href="#"><i className="fa fa-user"></i><span>Customer</span></a>
					<a href="#"><i className="fa fa-envelope"></i><span>Message</span></a>
					<a href="#"><i className="fa fa-shopping-basket"></i><span>Prdoucts</span></a>
					<a href="#"><i className="fa fa-sellsy"></i><span>Statices</span></a>
					<a href="#"><i className="fa fa-ban"></i><span>Ban Customers</span></a>
					<a href="#"><i className="fa fa-cog"></i><span>Setting</span></a>

					<a href="#" className="logout"><span>logout</span></a>
				</div>
			</>
		)	
}

export default SideMenu;