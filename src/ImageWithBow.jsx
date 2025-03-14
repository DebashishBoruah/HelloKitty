import React from "react";
import "./ImageWithBow.css";

const ImageWithBow = ({ mainImage, bowImage, caption }) => {
  return (
    <div className="image-container1">
      <h2 className="caption">{caption}</h2>
      <div className="image-wrapper">
        <img src={mainImage} alt="Main" className="main-image" />
        <img src={bowImage} alt="Bow" className="bow-image" />
      </div>
      <p className="styled-text">I always thought red was just a color—bold, fiery, and captivating. But then I saw you in that red kurta, and suddenly, red wasn’t just a color anymore; it became a feeling. A feeling of warmth, of passion, of something so breathtakingly beautiful that my heart forgot how to beat for a moment. The way the fabric drapes over you, the way it highlights the glow of your skin, and the way it makes your eyes shine a little brighter—it's almost as if red was created just for you. You don’t just wear it; you own it, you redefine it, you turn it into poetry. And in that moment, standing there looking at you, I knew—I could spend forever just watching you, lost in the magic of your beauty, the elegance of your presence, and the way you make the world around you seem so effortlessly enchanting.</p>
    </div>
  );
};

export default ImageWithBow;
