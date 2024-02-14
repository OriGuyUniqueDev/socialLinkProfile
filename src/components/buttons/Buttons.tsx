import { faGithub, faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import Button from "./Button";

interface ButtonsProps {}

const Buttons: FunctionComponent<ButtonsProps> = () => {
	return (
		<div className="flex flex-col items-center h-[18.0625rem] gap-4 mt-6 ">
			<Button
				social1={"GitHub"}
				icon1={faGithub}
				link={"https://github.com/OriGuyUniqueDev"}
			/>
			<Button
				social1={"Linkdin"}
				icon1={faLinkedin}
				link={"https://www.linkedin.com/in/ori-guy-fullstack-developer/"}
			/>
			<Button
				social1={"Email"}
				icon1={faEnvelope}
				link={"origuydev@gmail.com"}
				email={true}
			/>
			<Button
				social1={"Phone"}
				icon1={faPhone}
				link={"+972547520899"}
				tel={true}
			/>
			<Button
				social1={"CV"}
				icon1={faFile}
				link={"@\\Assets\\Ori Guy Resume.pdf"}
				downloadable={true}
			/>
		</div>
	);
};

export default Buttons;
