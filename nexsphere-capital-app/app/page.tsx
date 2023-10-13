import Header from "./header";
import SecOne from "./secOne";
import SecTwo from "./secTwo";
import SecThree from "./secThree";
import SecFour from "./secFour";
import SecFive from "./secFive";
import SecSix from "./secSix";
import Footer from "./footer"
export default function Page() {
  return (
    <>
      {/* le header pour la gestion du plain contenu  */}
      <Header />
      {/* le header pour la gestion du plain contenu  */}

      {/* pour la gestion du contenu principal de la page  */}
      <main>
        {/* le premier main */}
        <SecOne />

        {/* <div className="h-screen mt-14"> */}
        {/* deuxième main  */}

        <SecTwo />

        {/* troisième main */}
        <SecThree />

        {/* contro^le */}
        {/* troisième main */}
        {/* </div> */}

        {/* quatrième main pour la gestion des grids complexes */}
        <SecFour />
        {/* quatrième main */}

        {/* 5ème main  */}

        <SecFive />

        {/* fin de la 5ème main */}

        {/* contact page */}
        <SecSix />

        {/* contact page */}
      </main>

    <Footer />
    </>
  );
}
