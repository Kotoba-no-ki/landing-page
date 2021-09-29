import React from "react";
import "./styles/App.css";
import kotobaNoKiImg from "./assets/imgs/kotoba-no-ki.svg";
import nekoImg from "./assets/imgs/Maneki Neko 猫.png";
import SocialMediaLink from "./components/SocialMediaLink/SocialMediaLink";
import Twitter from "./assets/imgs/twitter.svg";
import Instagram from "./assets/imgs/instagram.svg";

function App() {
	const socialMedia = [
		{ to: "https://twitter.com/ki_kotoba?s=09", icon: Twitter, alt: "twitter" },
		{
			to: "https://instagram.com/kotoba.noki?utm_medium=copy_link",
			icon: Instagram,
			alt: "instagram",
		},
	];

	return (
		<main>
			<img src={kotobaNoKiImg} alt="kotoba no ki" />
			<h1>Kotoba no ki</h1>
			<h2>Nosso site está em construção</h2>
			<h3>
				Siga-nos em nossas redes sociais para ter atualizações sobre o status de
				desenvolvimento:
			</h3>
			<div className="social-media-links">
				{socialMedia.map((link) => (
					<SocialMediaLink
						to={link.to}
						socialmedia={link.icon}
						alt={link.alt}
						key={link.alt}
					/>
				))}
			</div>
			<div className="mascot-area">
				<img src={nekoImg} alt="Maneki Neko 猫" />
			</div>
		</main>
	);
}

export default App;
