import React from "react";

export default function PokemonDos(props) {
  return (
    <div>
      <p>
        {props.name}: Weight: {props.weight}kg
      </p>
    </div>
  );
}
