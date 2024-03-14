import Img1 from "../../shirt/wedding.png";
import Img2 from "../../shirt/promdress.png";
import Img3 from "../../shirt/elegant.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Bride Wear",
    description:
      "Exquisitely designed to capture the essence of romance and elegance, this gown is sure to leave you feeling like a true princess on your special day.",
  },
  {
    id: 2,
    img: Img2,
    title: "Prom dress",
    description:
      " This stunning gown is designed to make you stand out and shine like a star on your prom night. ",
  },
  {
    id: 3,
    img: Img3,
    title: "Elegant dress",
    description:
      "Exuding understated luxury and refined charm, this dress is designed to make a lasting impression at any special occasion. ",
  },
];

function TopProduct({ handleOrderPopup }) {
  return (
    <div>
      <div className="container">
        {/*header*/}
        <div className="text-left mb-24 ">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-grey-400">
            Add a touch of elegance to your winter wardrobe with our
            best-selling Stylish Dress. With limited stock available, shop now
            and experience the perfect blend of style and comfort.
          </p>
        </div>
        {/*body*/}
        <div
          className="grid grid-cols-1 sm:grid-cols-2
         md:grid-cols-3 gap-20 md:gap-5 
         place-items-center"
        >
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80
            dark:hover:bg-primary hover:text-white 
             relative shadow-xl duration-300 group max-w-[300px]"
            >
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto 
                  transform -translate-y-20 group-hover:scale-105 
                  duration-300 drop-shadow-md"
                />
              </div>
              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p
                  className="text-gray-500 group-hover:text-white 
                duration-300 text-sm line-clamp-2"
                >
                  {data.description}
                </p>
                <button
                  onClick={handleOrderPopup}
                  className="bg-primary hover:scale-105 duration-300 text-white
                      py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopProduct;
