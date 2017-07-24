import React from "react";
import Carousel from "nuka-carousel";
import Decorators from "./decorators";

const ProjectCarousel = () => (
  <Carousel wrapAround={true} autoplay={true} autoplayInterval={10000} decorators={Decorators}>
    <div className="project-carousel-slide">
      <h1>title</h1>
      <h2>subtitle</h2>
      <a href="#/project/3"><button>View project</button></a>
      <img src="http://res.cloudinary.com/dj1l8etr0/image/upload/v1500917416/yllkkwu6uomxasgrut0f.jpg" />
    </div>

    <div className="project-carousel-slide">
      <h1>title</h1>
      <h2>subtitle</h2>
      <a href="#/project/3"><button>View project</button></a>
      <img src="http://res.cloudinary.com/dj1l8etr0/image/upload/v1500917416/yllkkwu6uomxasgrut0f.jpg" />
    </div>

    <div className="project-carousel-slide">
      <h1>title</h1>
      <h2>subtitle</h2>
      <a href="#/project/2"><button>View project</button></a>
      <img src="http://res.cloudinary.com/dj1l8etr0/image/upload/v1500917416/yllkkwu6uomxasgrut0f.jpg" />
    </div>

    <div className="project-carousel-slide">
      <h1>title</h1>
      <h2>subtitle</h2>
      <a href="#/project/4"><button>View project</button></a>
      <img src="http://res.cloudinary.com/dj1l8etr0/image/upload/v1500917416/yllkkwu6uomxasgrut0f.jpg" />
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
