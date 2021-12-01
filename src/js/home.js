import React from "react";
import { Navbar } from "./component/Navbar.jsx";
import { Card } from "./component/Card.jsx";
import { Jumbotron } from "./component/Jumbotron.jsx";
import { Footer } from "./component/Footer.jsx";

export const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					<div className="col card">
						<Card />
					</div>
					<div className="col card">
						<Card />
					</div>
					<div className="col card">
						<Card />
					</div>
					<div className="col card">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
