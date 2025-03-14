import React from 'react';import HelloKitty from './HelloKitty';
import EnvelopeAnimation from './EnvelopeAnimation';
import ImageWithBow from './ImageWithBow';
;

function App() {
  return (
    <div className="App">
      <HelloKitty />
      <EnvelopeAnimation/>
      <ImageWithBow mainImage={"/src/assets/47a7d3ca-d67d-4136-8b2c-18554d8209c8.JPG"} bowImage={"/src/assets/cf19ab64ba4547db94fc43a28d9f7766-removebg-preview.png"} caption={"When she wears Kurta ❤️"}/>
    </div>
  );
}

export default App;