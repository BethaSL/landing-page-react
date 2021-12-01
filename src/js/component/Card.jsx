import React from "react";

export const Card = () => {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src="https://via.placeholder.com/400x200"
				alt="Card image cap"></img>
			<div className="card-body">
				<h5 className="card-title text-center">Card title</h5>
				<p className="card-text text-center">
					This is a wider card with supporting text below as a natural
					lead-in to additional content.This content is a little bit
					longer.
				</p>
			</div>
			<div className="card-footer d-flex justify-content-center">
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
};
