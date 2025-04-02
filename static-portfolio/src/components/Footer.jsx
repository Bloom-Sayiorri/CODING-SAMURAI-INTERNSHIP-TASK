import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
	return (
		<footer className="flex justify-center items-center w-full fixed bottom-0 left-0 mb-3">
			<nav className="">
				<ul className="">
					<NavLink>{/*ICONS FOR NAV*/}</NavLink>
					<NavLink>{/*ICONS FOR NAV*/}</NavLink>
					<NavLink>{/*ICONS FOR NAV*/}</NavLink>
				</ul>
			</nav>
			<p className="">All rights reserverd Inc &copy; 2025</p>
		</footer>
	);
}

export default Footer;
