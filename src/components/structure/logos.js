import React from 'react';
import {StaticQuery, graphql} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import {Container, Col, Row} from "react-bootstrap";

class Logos extends React.Component {

    render() {

        return (
            <Container fluid className={"bg-white my-3 py-3"}>
                <Col md={10} className="mx-auto pt-2 my-4">
                    <h3 className={"display-5 text-center fw-bold text-dark visually-hidden"}>Work, affiliations and collaborations</h3>
                    <Row className="justify-content-center mb-2">
                        {this.props.logos.nodes.map((item, i) => (
                            <Col md={2} sm={2} className="col-md-2 text-center mx-4 my-4" key={i}>
                                    <GatsbyImage image={getImage(item.logo)} alt={item.name}
                                                 className={"img-fluid"}/>
                            </Col>
                        ))}

                    </Row>
                </Col>
            </Container>
        )
    }
}

export default () => (
    <StaticQuery
        query={graphql`
        query PartnerQuery {
          allPartnersJson {
            nodes {
              name
              logo {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: NONE
                    formats: [WEBP]
                    transformOptions: {cropFocus: CENTER, fit: CONTAIN}
                    height: 100
                    sizes: ""
                    tracedSVGOptions: {alphaMax: 1.5}
                  )
                  original {
                    src
                  }
                }
              }
            }
          }
        }
        `}
        render={(data) => (
            <Logos logos={data.allPartnersJson}/>
        )}
    />
)
