// src/components/ClientOnlyCloverViewer.js
import React, { useState, useEffect } from 'react';

const ClientOnlyCloverViewer = ({ manifestId }) => {
  const [Viewer, setViewer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Dynamically import the Viewer component only on the client-side
    import('@samvera/clover-iiif/viewer')
      .then(mod => {
        setViewer(() => mod.default); // Set the Viewer component
        setIsLoading(false); // No longer loading
      })
      .catch(err => {
        console.error("Failed to load Clover IIIF Viewer:", err);
        setIsLoading(false); // Stop loading even if there's an error
      });
  }, []);

  if (isLoading) {
    return (
      <div style={{ height: '300px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Loading IIIF Viewer...
      </div>
    );
  }

  if (!Viewer) {
    return (
      <div style={{ height: '300px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'red' }}>
        Error loading IIIF Viewer.
      </div>
    );
  }

  // Render the Viewer component once it's loaded
  return <Viewer iiifContent={manifestId} />;
};

export default ClientOnlyCloverViewer;
