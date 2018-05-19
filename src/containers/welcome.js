import React from "react";

import InputMask from "react-input-mask";
import ProductCard from "../organisms/lib/ProductCard";

export default class Welcome extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			drop: { id: "mm", label: "em branco" }
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const {
			value,
			id
		} = e.target;
		const drop = {id, label: value };
		this.setState({drop});
	}

	render(){

		return(			
			<section>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
			</section>
		);
	}
}



