import { FunctionComponent } from "react";

interface CardTopProps {
	photoURL: string;
	name: string;
	city: string;
	country: string;
	moto: string;
}

const CardTop: FunctionComponent<CardTopProps> = ({ city, country, moto, name, photoURL }) => {
	return (
		<div className="flex flex-col  items-center">
			<img
				src={photoURL}
				alt={`${name} Profile Picture`}
				className="w-[5.5rem] h-[5.5rem] rounded-full mb-6"
			/>
			<div className="flex flex-col items-center gap-1 mb-6">
				<h1 className="text-white font-semibold text-2xl">{name}</h1>
				<h2 className="text-neon-green font-bold text-sm">
					{city}, {country}
				</h2>
			</div>
			<p className="text-white  text-sm">"{moto}"</p>
		</div>
	);
};

export default CardTop;
