import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";

interface ButtonProps {
	social1: string;
	icon1: IconDefinition;
	link: string;
	email?: boolean;
	tel?: boolean;
	downloadable?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({ icon1, social1, link, email, tel, downloadable }) => {
	return (
		<a
			download={downloadable}
			href={`${email ? "mailto:" : ""} ${tel ? "telto:" : ""} ${link}`}
		>
			<button className="w-[17.4375rem] sm:w-[19rem]  h-[2.8125rem] sm:h-[2.8125rem] bg-gray text-white font-bold text-sm rounded-lg hover:bg-neon-green hover:text-black transition duration-500	 ">
				<FontAwesomeIcon icon={icon1} /> {social1}{" "}
			</button>
		</a>
	);
};

export default Button;
