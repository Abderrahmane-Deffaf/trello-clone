import React from "react";
import card from "../../assets/landing/graphics/card.png";

const Card = () => {
  return (
    <a>
      <figure className="grid row-span-2 rounded-lg overflow-hidden gap-2">
        <img className="row-sapn-1" src={card} />
        <figcaption className="row-span-2">
          <p className="font-thin">IDÉES TABLEAUX | TÉLÉTRAVAIL</p>
          <p>
            Les 3 géants : comment gérer une équipe à distance ou hybride à
            l'aide de Trello, Slack et Confluence
          </p>
        </figcaption>
      </figure>
    </a>
  );
};

export default Card;
