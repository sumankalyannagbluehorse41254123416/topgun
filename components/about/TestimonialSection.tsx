"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function TestimonialSection() {
  const testimonials = [
    {
      text: "very nice and professional training body for gun shooting in ahmedabad. Provides great opportunities for students and helps in physical and mental development of a person",
      name: "Lasya Andalam",
      position: "Student",
      image:
        "https://wip.tezcommerce.com:3304/admin/module/53/1649917828542.jpg",
    },
    {
      text: "A very good and amazing experience.the shooting range is well equipped and a peaceful environment for shooting.The most important  a very careful, supportive coach and very hardworking personality..",
      name: "Pratyush Aman Barnik",
      position: "Student",
      image:
        "https://wip.tezcommerce.com:3304/admin/module/53/1649835830705.jpg",
    },
    {
      text: "A very good and amazing experience.the shooting range is well equipped and a peaceful environment for shooting.The most important  a very careful, supportive coach and very hardworking personality..",
      name: "Pratyush Aman Barnik",
      position: "Student",
      image:
        "https://wip.tezcommerce.com:3304/admin/module/53/1649835830705.jpg",
    }
  ];

  return (
    <div className="section-full bg-img-fix content-inner overlay-black-dark">
      <div className="container">
        <div className="section-head text-center text-white">
          <h3 className="h3">TESTIMONIAL</h3>
          <div className="dez-separator bg-primary"></div>
          <p>
            Our academy is a factory for producing Champions. Every year new
            people join us and we help them reach their potential.
          </p>
        </div>

        <div className="section-content">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              1024: { slidesPerView: 2 },
            }}
            className="testimonial-five"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-6">
                  <div className="testimonial-text bg-white quote-left quote-right">
                    <p>{t.text}</p>
                  </div>
                  <div className="testimonial-detail clearfix bg-primary text-white">
                    <h4 className="testimonial-name m-tb0">{t.name}</h4>
                    <span className="testimonial-position">{t.position}</span>
                    <div className="testimonial-pic radius">
                      <Image
                        src={t.image}
                        alt={t.text}
                        width={100}
                        height={100}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
