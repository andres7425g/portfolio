import React from "react";
import { Badge } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTheme } from "next-themes";
import LongText from "@/atoms/LongText";
import projects from "@/app/mocks/projects.mock";
import CardProject from "@/atoms/CardProject";

const ProjectsList: React.FC = () => {

  return (
    <div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        grabCursor={true}
        freeMode={true}
        loop={true}
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} style={{ width: "300px", height: "auto" }}>
            <CardProject project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectsList;
