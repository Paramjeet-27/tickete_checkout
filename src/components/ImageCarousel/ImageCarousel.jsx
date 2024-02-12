import Carousel from "react-bootstrap/Carousel";

const ImageCarousel = () => {
  return (
    <>
      <div>
        <Carousel>
          <Carousel.Item>
            <img src="/image_1.jpg" alt="image" height="200px" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/image_2.jpg" alt="image" height="200px" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/image_3.jpg" alt="image" height="200px" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};
export default ImageCarousel;
