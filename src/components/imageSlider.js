import React from "react";

const ImageSlider = () => {
  const images = [
    {
      url: "https://www.rtlnieuws.nl/sites/default/files/content/images/2022/12/07/Alex-Pansier.png?itok=FhAvLUWD&width=2048&height=1152&impolicy=semi_dynamic",
    },
    {
      url: "https://drive.google.com/file/d/12s_MWKh2DT8o5kRon5pIdGxAWZQRHAZk/preview",
    },
    {
      url: "https://drive.google.com/file/d/1045IgM_j1tZFiimSBS3X58VK7ZwKR4AM/preview",
    },
  ];

  // Shuffle the images array
  const shuffledImages = [...images].sort(() => Math.random() - 0.5);

  return (
    <div className="relative overflow-hidden">
      <div className="flex space-x-4 animate-scroll">
        {shuffledImages.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Image ${index + 1}`}
            className="w-48 h-48 object-cover"
          />
        ))}
        {shuffledImages.map((image, index) => (
          <img
            key={index + shuffledImages.length}
            src={image.url}
            alt={`Image ${index + 1}`}
            className="w-48 h-48 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
