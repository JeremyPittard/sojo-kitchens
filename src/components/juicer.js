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
      <Container className='py-5 my-5'>
        <ul
          className="juicer-feed"
          data-feed-id="398840626962300"
          data-per="3"
          data-columns="3"
          data-truncate="75"
        ></ul>
      </Container>
    </>
  );
};

export default JuicerFeed;
