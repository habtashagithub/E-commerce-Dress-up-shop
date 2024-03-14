import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Hiwot",
    text: "I've been shopping at Dress up shop for years, and I can confidently say it's my go-to destination for all things fashion. From trendy clothing to classic staples, they offer a diverse range of options that cater to every style and occasion.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Meklit",
    text: "The quality of their clothing is unparalleled. Every piece I've bought has exceeded my expectations in terms of fabric, fit, and craftsmanship. Whether it's a casual outfit for a weekend getaway or a formal gown for a special event, I always receive compliments whenever I wear their clothing.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Rediet",
    text: "What truly sets Dress up shop apart is their exceptional service. The website is easy to navigate, making the shopping experience seamless and enjoyable. I love how they provide detailed product descriptions and high-quality images, allowing me to make informed decisions before making a purchase.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Hana",
    text: ", I can't recommend Dress up shop enough. If you're looking for stylish clothing, exceptional service, and an enjoyable shopping experience, look no further. Thank you,Dress up shop, for consistently exceeding my expectations and helping me look and feel my best!",
    img: "https://picsum.photos/103/103",
  },
];

function Testimonies() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            At Dress Up Shop, we take pride in providing exceptional products
            and service to our valued customers. Don't just take our word for
            it—here's what some of our satisfied customers have to say about
            their experience shopping with us
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonies;
