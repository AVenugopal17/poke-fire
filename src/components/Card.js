import React from "react";
// destructure id, name, imageUrl, attacks, addToCollection, removeFromCollection, inCollection
const Card = ({id, name, imageUrl, attacks, addToCollection, removeFromCollection, inCollection, index
}) => {
  // this is a short-circuit statement where attacks must evaluate to true in order for attacks to map
  const mappedAttacks =
    attacks &&
    attacks.map(attack => {
      return (
        <div key={attack} className="attack">
          Attack: {attack.name}
        </div>
      );
    });
  return (
    <div>
      <img src={imageUrl} />
      <div>{name}</div>
      <div>{mappedAttacks}</div>
      {inCollection ? 
      <button onClick={() => removeFromCollection(index)}>Remove</button> : 
      
      <button onClick={() => addToCollection({id, name, attacks, imageUrl, inCollection: true })}>Add</button>}
    </div>
  );
};

export default Card;
