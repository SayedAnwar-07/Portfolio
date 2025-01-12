import image1 from "../../assets/images/images_1.jpg";
import image2 from "../../assets/images/images_2.png";
import image3 from "../../assets/images/images_3.png";
import image4 from "../../assets/images/images_4.png";
import image5 from "../../assets/images/images_5.png";
import image6 from "../../assets/images/images_6.jpg";
import image7 from "../../assets/images/images_7.png";
import image8 from "../../assets/images/images_8.png";

import "./Hero.css";

const Hero = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  return (
    <div>
      <div className="box">
        {images.map((image, index) => (
          <span key={index} style={{ "--i": index + 1 }}>
            <img src={image} alt={`Image ${index + 1}`} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
