import React from "react";

const PhotoBackground = background => {
  return (
    <div className="photo-background" style={("backgroundImage", background)} />
  );
};

export default PhotoBackground;
