import Img1 from "../../women/Bohemian.png";
import Img2 from "../../women/Summer Floral.png";
import Img3 from "../../women/Striped Summer Chiffon Dress with Roll-up Sleeves.png";
import Img4 from "../../women/Summer Slip On Dress.png";
import Img5 from "../../women/t-shirt.png";

import { FaStar } from "react-icons/fa6";
import "aos/dist/aos.css";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Bohemian Beach Dress",
    rating: 8.0,
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Summer  Floral Dress",
    rating: 8,
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Striped Summer Chiffon Dress with Roll-up Sleeves",
    rating: 7,
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Summer Slip On Dress",
    rating: 7.5,
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "T-Shirt",
    rating: 5,
    aosDelay: "800",
  },
];
function Products() {
  return (
    <div className="mt-14 mb-12 ">
      <div className="container">
        {/*header section*/}
        <div className="text-center mb-10 max-w-[600px]   ">
          <p data-aos="fade-up" className="text-[20px] text-blue-500">
            Top selling products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            products
          </h1>
          <p data-aos="fade-up" className="text-[14px] text-grey-400">
            When choosing a dress you want to find something that will keep you
            cool but also looking good. While each woman will have different
            opinions on the best dress, ultimately it’s up to you to choose what
            you’re comfortable and confident in.
          </p>
        </div>
        {/*body section*/}
        <div>
          <div
            className="grid grid-cols-1 
          sm:grid-cols-3 md:grid-cols-4
           lg:grid-cols-5 place-items-center gap-5"
          >
            {/*card section*/}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md  "
                />
                <div>
                  <h3 className="font-semibold">{data.title} </h3>
                  <p className="text-sm text-gray-600">{data.color} </p>
                  <div>
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              data-aos="fade-up"
              className="bg-primary hover:scale-105 duration-300 text-white
                      py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
            >
              View all button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
