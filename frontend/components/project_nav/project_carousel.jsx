import React from "react";
import Carousel from "nuka-carousel";
import Decorators from "./decorators";

const ProjectCarousel = () => (
  <Carousel wrapAround={true} autoplay={true} autoplayInterval={2000} decorators={Decorators}>
    <div className="project-carousel-slide">
      <h1>TEMPLE CITY</h1>
      <h2>Amass more devoted followers than your rivals in this innovative video game set in deep space!</h2>
      <a href="#/project/3"><button>View project</button></a>
      <img src="http://res.cloudinary.com/dj1l8etr0/image/upload/v1501106963/NCKSTRTR_VIDEO_GAME_003_jjlbld.jpg" />
    </div>

    <div className="project-carousel-slide">
      <h1>THE WOMAN WHO FELL TO EARTH</h1>
      <h2>Follow the exploits of our heroine as she tries to make sense of, and peace with, crazy Earthlings!</h2>
      <a href="#/project/3"><button>View project</button></a>
      <img src="http://res.cloudinary.com/dj1l8etr0/image/upload/v1501108745/NCKSTRTR_GRAPHIC_NOVEL_003_ei4jbg.jpg" />
    </div>

    <div className="project-carousel-slide">
      <h1>UNIVERSAL PET INSURANCE </h1>
      <h2>Can we afford to let our best friends down?</h2>
      <a href="#/project/2"><button>View project</button></a>
      <img src="http://res.cloudinary.com/dj1l8etr0/image/upload/v1501177002/s3620n02esgmiool_zss2jj.jpg" />
    </div>

    <div className="project-carousel-slide">
      <h1>CLASSIC RIDESHARE</h1>
      <h2>Travel in timeless style!</h2>
      <a href="#/project/4"><button>View project</button></a>
      <img src="http://res.cloudinary.com/dj1l8etr0/image/upload/v1501111376/NCKSTRTR_CLASSIC_CAR_RENTAL_AGENCY_001_dosnnq.jpg" />
    </div>

    <div className="project-carousel-slide">
      <h1>title</h1>
      <h2>subtitle</h2>
      <a href="#/project/1"><button>View project</button></a>
      <img src="http://res.cloudinary.com/dj1l8etr0/image/upload/v1500917416/yllkkwu6uomxasgrut0f.jpg" />
    </div>
  </Carousel>
);

export default ProjectCarousel;
