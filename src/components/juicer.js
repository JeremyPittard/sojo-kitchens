import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

const JuicerFeed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.juicer.io/embed.js";
    script.async = true;

    document.body.appendChild(script);
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

