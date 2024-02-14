import { FunctionComponent } from "react";
import Buttons from "./buttons/Buttons";
import CardTop from "./cardTop/CardTop";

interface CardProps {}

const Card: FunctionComponent<CardProps> = () => {
	return (
		<div className="bg-dark-gray rounded-xl w-[23.25rem] sm:w-[24rem] h-[36.1875rem] sm:h-[38.1875rem] py-6 sm:py-10 px-6 sm:px-10 ">
			<CardTop
				photoURL={"src\\Assets\\profilePic.jpg"}
				name={"Ori Guy"}
				city={"Beer Sheva"}
				country={"Israel"}
				moto={"Always Evolve"}
			/>
			<Buttons />
		</div>
	);
};

export default Card;
