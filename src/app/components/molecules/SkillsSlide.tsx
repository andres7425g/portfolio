import React from "react";
import { Row } from "react-bootstrap";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { skillCategories } from "@/app/mocks/skills.mock";
import SkillsCard from "@/atoms/SkillsCard";

import "swiper/css";

const SkillsSlide: React.FC = () => {
  return (
    <Row className="d-flex justify-content-center">
      {skillCategories.map((category, idx) => (
        <div key={idx}>
          <h3 className="text-center my-4">{category.category}</h3>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            grabCursor={true}
            freeMode={true}
            loop={true}
            navigation={true}
            effect={"coverflow"}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow]}
          >
            {category.skills.map((skill, index) => (
              <SwiperSlide
                key={index}
                style={{ width: "250px", height: "auto" }}
              >
                <SkillsCard
                  title={skill.title}
                  logo={skill.logo.src}
                  description={skill.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </Row>
  );
};

export default SkillsSlide;
