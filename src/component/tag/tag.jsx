import Image3 from "../../Tag/tag/shopping.png";
import Image1 from "../../Tag/tag/womens.png";
import Image2 from "../../Tag/tag/jewellery.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Women's Fashion",
    description:
      "we have different kinds of dresses, such as bohemian beach dresses, summer floral dresses, striped summer chiffon dresses with roll-up sleeves, summer floral dresses, and summer slip-on dresses, etc.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Jewellery",
    description: "Intriguing, alluring, fascinating, enthralling, tantalizing.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Bride and Bridemaid Dress",
    description:
      "This gorgeous dress features a scoop neckline, lace chiffon fabric, and a hi-lo hemline that is sure to turn heads. The 94% nylon and 6% spandex fabric are comfortable and figure-flattering, and the hand wash-only care instructions make it easy to keep this dress looking its best",
  },
];
function Tag({ handleOrderPopup }) {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div
      className="relative overflow-hidden min-h-[550px] sm:min-h-[650px]
     bg-gray-100 flex justify-center items-center
      dark:bg-gray-950 dark:text-white duration-200"
    >
      <div
        className="h-[700px] w-[700px] bg-primary/40 
      absolute -top-1/2 right-7 rounded-3xl rotate-45 -z-9"
      ></div>
      {/*tag section*/}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/*text content section*/}
                <div
                  className="flex flex-col justify-center
             gap-4 pt-12 sm:pt-0 text-center
              sm:text-left order-2 sm:order-1 relative z-10 "
                >
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div>
                    <button
                      className="bg-gradient-to-r from-primary
                 to-secondary hover:scale-105 duration-200
                  text-white py-2 px-4 rounded-full"
                      onClick={handleOrderPopup}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/*text content section*/}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[490px] h-[500px] 
                  sm:h-[200px] sm:w-450px sm:scale-105 lg:scale-125 object-contain mx-auto "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Tag;
