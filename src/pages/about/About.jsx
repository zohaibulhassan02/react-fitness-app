import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut eius
        consequuntur dolorum nesciunt ipsum voluptatibus.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Story-1" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              non laudantium numquam dicta minus architecto accusamus
              exercitationem eos consequatur voluptates, quia vel aliquid
              distinctio aliquam qui omnis nulla est, soluta maiores adipisci
              iure tenetur corporis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              quos, quisquam eum laudantium itaque ratione. Similique omnis
              aperiam vel quisquam ad nam nemo.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              nostrum maxime optio.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container vision__story-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              non laudantium numquam dicta minus architecto accusamus
              exercitationem eos consequatur voluptates, quia vel aliquid
              distinctio aliquam qui omnis nulla est, soluta maiores adipisci
              iure tenetur corporis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              quos, quisquam eum laudantium itaque ratione. Similique omnis
              aperiam vel quisquam ad nam nemo.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Vision" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container mission__story-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Mission" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              non laudantium numquam dicta minus architecto accusamus
              exercitationem eos consequatur voluptates, quia vel aliquid
              distinctio aliquam qui omnis nulla est, soluta maiores adipisci
              iure tenetur corporis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              quos, quisquam eum laudantium itaque ratione. Similique omnis
              aperiam vel quisquam ad nam nemo.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              nostrum maxime optio.
            </p>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
