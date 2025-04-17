import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";

function Home() {
  const [logements, setLogements] = useState(
    /** @type {Array<{ id: string, title: string, cover: string }>} */ ([])
  );

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setLogements(data))
      .catch((err) =>
        console.error("Erreur lors du chargement des logements :", err)
      );
  }, []);

  return (
    <>
      <Banner
        image="/assets/banner.jpg"
        text={
          <>
            Chez vous, <br className="line-break" />
            partout et ailleurs
          </>
        }
      />

      <div className="home__gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
