import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Container, Col, Row } from "react-bootstrap";

const Logos = ({ logos }) => (
  <Container fluid className="bg-white my-3 py-3">
    <Col md={10} className="mx-auto pt-2 my-4">
      <h3 className="display-5 text-center fw-bold text-secondary">
        Work, affiliations and collaborations
      </h3>
      <Row className="justify-content-center mb-2">
        {logos.nodes.map(({ name, logo }, i) => (
          <Col md={2} sm={2} className="text-center mx-4 my-4" key={name || i}>
            <GatsbyImage
              image={getImage(logo)}
              alt={name}
              className="img-fluid"
            />
          </Col>
        ))}
      </Row>
    </Col>
  </Container>
);

const LogoComponent = () => {
  const data = useStaticQuery(graphql`
    query PartnerQuery {
      allPartnersJson {
        nodes {
          name
          logo {
            childImageSharp {
              gatsbyImageData(
                placeholder: NONE
                formats: [AUTO, WEBP]
                transformOptions: { cropFocus: CENTER, fit: CONTAIN }
                height: 100
              )
            }
          }
        }
      }
    }
  `);

  return <Logos logos={data.allPartnersJson} />;
};

export default LogoComponent;