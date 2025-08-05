import * as React from "react";
import { Container } from "react-bootstrap";
import ClientOnlyCloverViewer from "../ClientOnlyCloverViewer";

/**
 * A component to display a list of IIIF viewers using Clover.
 *
 * @param {object} props
 * @param {string[]} props.manifests - An array of IIIF manifest IDs.
 */
const IIIFSection = ({ manifests }) => {
  // Check if we are on the server-side or if there are no manifests.
  // We should not render the client-side viewers on the server.
  const isSSR = typeof window === "undefined";
  if (isSSR || !manifests || manifests.length === 0) {
    return null;
  }

  return (
    <Container className="bg-pastel p-4 mb-4">
      <h2 className="text-black fw-bold mt-4">IIIF Demos</h2>
      <p className="text-black">
        The following IIIF manifests are provided for demonstration purposes. The images are stored on 
        AWS in an S3 bucket, and processed via a Cantaloupe IIIF server, manifests are created from a list of files in directus 
        and the cantaloupe json. The manifest is generated using a small node script and the static files are served off 
        github pages and the viewer below is the Clover IIIF viewer.
      </p>
      {manifests.map((manifest, idx) => (
        <div key={manifest || idx} className="my-4" id={`iiif-viewer-${idx}`}>
          <ClientOnlyCloverViewer manifestId={manifest} />
        </div>
      ))}
    </Container>
  );
};

export default IIIFSection;