import React from "react";
import Carousel from "nuka-carousel";
import Decorators from "./decorators";

const ProjectCarousel = () => (
  <Carousel wrapAround={true} autoplay={true} autoplayInterval={2250} decorators={Decorators}>
    <div className="project-carousel-slide">
      <h1>TEMPLE CITY</h1>
      <h2>Amass more devoted followers than your rivals in this innovative video game set in deep space!</h2>
      <a href="#/project/3"><button>View project</button></a>
      <img src="http://res.cloudinary.com/dj1l8etr0/image/upload/v1501106963/NCKSTRTR_VIDEO_GAME_003_jjlbld.jpg" />
    </div>

    <div className="project-carousel-slide">
      <h1>BRAVE LITTLE ROASTR</h1>
      <h2>Portable coffee roaster, grinder and brewer is as convenient as it is delicious!</h2>
      <a href="#/project/3"><button>View project</button></a>
      <img src="http://res.cloudinary.com/dj1l8etr0/image/upload/v1501184576/NCKSTRTR_BRAVE_LITTLE_ROASTER_003_uqslzf.jpg" />
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
      <h1>Moblie Tree Home</h1>
      <h2>Tarzan never had it so good!</h2>
      <a href="#/project/1"><button>View project</button></a>
      <img src="http://res.cloudinary.com/dj1l8etr0/image/upload/v1501190970/NCKSTRTR_MOBILE_TREE_HOME_001_zbvznc.jpg" />
    </div>
  </Carousel>
);

export default ProjectCarousel;
