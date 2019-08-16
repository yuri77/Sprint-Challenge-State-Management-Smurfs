import React from "react";

const Smurf = props => {
  const { smurf } = props;
  return (
    <div>
      <p>{smurf.name}</p>
      <p>{smurf.age}</p>
      <p>{smurf.height}</p>
    </div>
  );
};

export default Smurf;
