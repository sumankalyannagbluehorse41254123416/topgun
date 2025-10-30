"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// ✅ Helper function to remove HTML tags and decode entities like &nbsp;
const stripHtml = (html: string) => {
  if (!html) return "";
  return (
    html
      // Remove HTML tags
      .replace(/<[^>]*>/g, "")
      // Replace HTML entities like &nbsp; with spaces
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      // Collapse multiple spaces and trim
      .replace(/\s+/g, " ")
      .trim()
  );
};

interface Subsection {
  title?: string; // 👤 Name
  description?: string; // 💬 Testimonial text
  image?: string; // 🖼️ Image
}

interface Section {
  title?: string; // TESTIMONIAL
  shortDescription?: string; // Short paragraph
  subsections?: Subsection[];
}

export default function TestimonialSection({ data }: { data?: Section }) {
  const title = data?.title || "TESTIMONIAL";
  const shortDescription = stripHtml(data?.shortDescription || "");
  const testimonials = data?.subsections || [];

  return (
    <div className="section-full bg-img-fix content-inner overlay-black-dark">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center text-white">
          <h3 className="h3">{title}</h3>
          <div className="dez-separator bg-primary"></div>
          <p>{shortDescription}</p>
        </div>

        {/* Section Content */}
        <div className="section-content">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={3000}
            breakpoints={{
              1024: { slidesPerView: 2 },
              991: { slidesPerView: 1 },
            }}
            className="testimonial-five"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-6">
                  <div className="testimonial-text bg-white quote-left quote-right">
                    <p>{stripHtml(t.description || "")}</p>
                  </div>
                  <div className="testimonial-detail clearfix bg-primary text-white">
                    <h4 className="testimonial-name m-tb0">
                      {stripHtml(t.title || "Anonymous")}
                    </h4>
                    <span className="testimonial-position">Student</span>
                    <div className="testimonial-pic radius">
                      <Image
                        src={t.image || "/images/default-user.jpg"}
                        alt={t.title || ""}
                        width={100}
                        height={100}
                        className="rounded-full object-cover"
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
