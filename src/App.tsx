import React from "react";
import "./styles/App.css";
import kotobaNoKiImg from "./assets/imgs/kotoba-no-ki.svg";
import nekoImg from "./assets/imgs/Maneki Neko 猫.png";
import SocialMediaLink from "./components/SocialMediaLink/SocialMediaLink";
import Twitter from "./assets/imgs/twitter.svg";

function App() {
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
				<SocialMediaLink
					to="https://twitter.com/ki_kotoba?s=09"
					socialmedia={Twitter}
					alt="twitter"
				/>
			</div>
			<div className="mascot-area">
				<img src={nekoImg} alt="Maneki Neko 猫" />
			</div>
		</main>
	);
}

export default App;
