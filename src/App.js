import React, { useState, useEffect } from "react";
import "./App.scss";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import "mailgo/dist/mailgo.min.js";
import ImageCallout from "./components/image-callout";
import About from "./partials/About";
import JuicerFeed from "./components/juicer";
import SojoMap from "./components/map";
import Footer from "./components/footer";
import { GraphQLClient, gql } from "graphql-request";

function App() {
  const [isLoading, toggleLoading] = useState(true);
  const [content, setContent] = useState(null);

  useEffect(() => {
    async function fetchContent() {
      const endpoint =
        "https://api-ap-northeast-1.graphcms.com/v2/ckewukylarexp01zbd25rdink/master";

      const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE1OTk4ODM1MzksImF1ZCI6WyJodHRwczovL2FwaS1hcC1ub3J0aGVhc3QtMS5ncmFwaGNtcy5jb20vdjIvY2tld3VreWxhcmV4cDAxemJkMjVyZGluay9tYXN0ZXIiXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiI2Yjg1NmY2ZC00NWY4LTRhNmEtYTIxYi0xYzk0MGU3NzM1ZjEiLCJqdGkiOiJja2V6NWNvNmQxNnNxMDF4cDd6MzlncDU4In0.abZTDsaQo0WQK6DmtRA6yaRBMvyISUjSJS2XB5vFngqD3pNNKULjhZl6Epa7-Kk6TEpRiYHJ3ElmjpEowGbRBrQsxRLP1mo7vsXKSAp3DLhTteueBwHAa6BCTiElf6uhvO040MDIFVny_cxFVhUKeAY8rZpVHKnYHE__gMCrDIt_J8Ge7ingIKOO3CUdEqgwSIPU_OlEVqMNU5T2f-143rSzR0CH5mQwhDzL3DZw8TB7dE-GD8B-LgxK_6oPI_5sCimsPDJXm2q76hSZ0cA6IwGhp3LfEPxcGeQWywCBigcTTJScAa61o6ROgbgppWG7XEK9iJa7B-WwHEp9fQgJAXm5EEATrMd0TSVjmY8aSTlrhChADATyMddFGMdivPbBuHWhPTnrS1i-nHewD-EWtEL90ylvYZZB1FdL9x4RhnGJn2Pn7q-7sF8CIjsLApnvdB1Q5OELogFwEW5WTJ61aFjC5vrVBG-5cSjs-fUDEhl3KUAUe_QVDDCKXPsQ4uP1tk2zn-gD1p_ExjgZqNsfNzpKqzt1UVsvjCqQ3tymHV3e_pWKBOiKx5lbP6Hvt3p30h4rdWf12Y3AUGDHQbZSawLDwH2WCRl9s6Ugq3eitsQHwjhMQV-pxAbmezOGIxnGs5JpCzGgKo5whLnI-qsU_-yJYzZJxk_mbojOIHfVcjQ",
        },
      });

      const query = gql`
        {
          heroImages(first: 1) {
            id
            headline
            subHeading
            largeScreen: image {
              url(transformation:{image:{resize:{width:1920, height:1080}}})
            }
            smallScreen: image {
              url(transformation:{image:{resize:{height:700, fit:max}}})
            }
            buttonText
          }
          aboutSections(first: 1) {
            id
            content {
              html
            }
          }
          services {
            id
            name
            description
            image {
              url
            }
          }
          settings: settingsx(first: 1){
            fbUrl
            instagramUrl
            linkedInUrl
            phoneNumber
            email
            location {
              latitude
              longitude
            }
          }
        }
      `;

      const data = await graphQLClient.request(query);
      setContent(data);
      toggleLoading(false);
    }

    fetchContent().catch((error) => console.error(error));
  }, []);

  if (isLoading) {
    return <h1>LOADING!</h1>;
  } else {
    return (
      <div>
        <NavBar />
        <Hero title={content.heroImages[0].headline} subtitle={content.heroImages[0].subHeading} image={content.heroImages[0].largeScreen.url} imageSmall={content.heroImages[0].smallScreen.url} buttonText={content.heroImages[0].buttonText} />
        <About content={content.aboutSections[0].content.html} />
        <div id="services">
        <ImageCallout callOuts={content.services} id={content.services.id} />
        </div>
        <JuicerFeed />
        <SojoMap details={content.settings[0]}/>
        <Footer />
      </div>
    );
  }
}

export default App;
