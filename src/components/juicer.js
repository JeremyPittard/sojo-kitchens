import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

import { gsap, TimelineMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


const JuicerFeed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.juicer.io/embed.js";
    script.async = true;

    document.body.appendChild(script);

    const tl = new TimelineMax();
    setTimeout(() =>{
      tl.fromTo("#portfolio ul", { opacity: 0 }, {opacity: 1, y: 0, duration:0.35 , scrollTrigger: { trigger: "#portfolio", start: "top center" }});
    }, 1000)
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Container id="portfolio" className='py-5 my-5'>
        <ul
          className="juicer-feed"
          data-feed-id="360916881173648"
          data-per="12"
          data-columns="3"
          data-truncate="75"
        ></ul>
      </Container>
    </>
  );
};

export default JuicerFeed;

