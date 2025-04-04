import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import "../styles/Logement.scss";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(
    /** @type {{ pictures: string[] } | null} */ (null)
  );

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id);
        setLogement(found);
      })
      .catch((err) => console.error("Erreur chargement logement :", err));
  }, [id]);

  if (!logement) return <p>Logement non trouvé</p>;

  return (
    <div className="logement">
      <Slideshow pictures={logement.pictures} />
      {/* Le reste des infos viendra ici plus tard */}
    </div>
  );
}

export default Logement;
