import React from "react";
import "./style.css";

interface SocialMediaLinkI {
	to: string;
	socialmedia: string;
	alt: string;
}

const SocialMediaLink = ({ to, socialmedia, alt }: SocialMediaLinkI) => (
	<a href={to}>
		<img src={socialmedia} alt={alt} />
	</a>
);

export default SocialMediaLink;
