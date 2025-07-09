// src/components/ClientOnlyCloverViewer.js
import React, { useState, useEffect } from 'react';
import Viewer from "@samvera/clover-iiif/viewer";
// Optional: import primitives if you want to display manifest metadata
// import { Label, Summary } from "@samvera/clover-iiif/primitives";

const ClientOnlyCloverViewer = ({ manifestId }) => {
  const [isClient, setIsClient] = useState(false);

  console.log('ClientOnlyIIIFViewer rendered'); // See if component is rendering at all

  useEffect(() => {
    console.log('useEffect triggered');
    setIsClient(true);
    console.log('isClient set to true');
  }, []);

  if (!isClient) {
    console.log('Rendering loading state');
    return <div style={{ height: '300px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             Loading IIIF Viewer...
           </div>;
  }

  console.log('Attempting to render actual Viewer with manifest:', manifestId);
  return <Viewer iiifContent={manifestId} />;
};

export default ClientOnlyCloverViewer;
