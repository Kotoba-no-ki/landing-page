import React from "react";
import "./styles/App.css";
import kotobaNoKiImg from "./assets/imgs/kotoba-no-ki.svg";
import nekoImg from "./assets/imgs/Maneki Neko 猫.png";

function App() {
	return (
		<main>
			<img src={kotobaNoKiImg} alt="kotoba no ki" />
			<h1>Kotoba no ki</h1>
			<h2>Nosso site está em construção</h2>
			<h3>
				Siga-nos em nossas redes sociais para ter atualizações sobre o status de
				desenvolvimento
			</h3>
			<div className="social-media-links">aa</div>
			<div className="mascot-area">
				<img src={nekoImg} alt="Maneki Neko 猫" />
			</div>
		</main>
	);
}

export default App;
