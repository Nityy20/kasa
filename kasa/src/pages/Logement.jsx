import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Tag from "../components/Tag";
import Collapse from "../components/Collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(
    /** @type {{
      id: string,
      title: string,
      location: string,
      pictures: string[],
      tags: string[],
      host: { name: string, picture: string },
      rating: string,
      description: string,
      equipments: string[]
    } | null} */ (null)
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

      <div className="logement__header">
        <div className="logement__left">
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>
          <div className="logement__tags">
            {logement.tags.map((tag, index) => (
              <Tag key={index} label={tag} />
            ))}
          </div>
        </div>

        <div className="logement__right">
          <div className="logement__host">
            <p className="logement__host-name">{logement.host.name}</p>
            <img
              className="logement__host-picture"
              src={logement.host.picture}
              alt={`Photo de ${logement.host.name}`}
            />
          </div>

          <div className="logement__rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className={`logement__star ${
                  i < Number(logement.rating) ? "filled" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="logement__collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Logement;
