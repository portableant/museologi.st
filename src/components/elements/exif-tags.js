import React, { useState, useEffect } from "react"
import EXIF from "exif-js"
import { Accordion, Alert, Container, Row, Col } from "react-bootstrap"

// Define useful EXIF tags to extract
const usefulTags = {
  'Make': 'Camera Make',
  'Model': 'Camera Model',
  'DateTime': 'Date/Time',
  'DateTimeOriginal': 'Date Taken',
  'ExposureTime': 'Shutter Speed',
  'FNumber': 'Aperture',
  'ISO': 'ISO Speed',
  'ISOSpeedRatings': 'ISO Speed',
  'FocalLength': 'Focal Length',
  'LensModel': 'Lens',
  'Flash': 'Flash',
  'WhiteBalance': 'White Balance',
  'ExposureMode': 'Exposure Mode',
  'MeteringMode': 'Metering Mode',
  'GPS': 'GPS Data',
  'GPSLatitude': 'Latitude',
  'GPSLongitude': 'Longitude',
  'Orientation': 'Orientation',
  'XResolution': 'X Resolution',
  'YResolution': 'Y Resolution',
  'Software': 'Software'
}

const ExifTags = ({ imageData }) => {
  const [exifData, setExifData] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (imageData && imageData.publicURL) {
      setLoading(true)

      const imageUrl = imageData.publicURL
      const img = new Image()
      img.crossOrigin = "anonymous"

      img.onload = () => {
        EXIF.getData(img, function () {
          const allMetaData = EXIF.getAllTags(this)
          // Filter to only useful tags
          const filteredData = {}
          Object.keys(usefulTags).forEach(tag => {
            if (allMetaData[tag] !== undefined && allMetaData[tag] !== null) {
              filteredData[tag] = allMetaData[tag]
            }
          })
          setExifData(filteredData)
          setLoading(false)
        })
      }

      img.onerror = () => {
        setLoading(false)
        console.error('Failed to load image for EXIF extraction:', imageUrl)
      }

      img.src = imageUrl
    }
  }, [imageData])

  const formatExifValue = (key, value) => {
    if (value === null || value === undefined) {
      return 'N/A'
    }

    // Format specific values
    switch (key) {
      case 'DateTime':
      case 'DateTimeOriginal':
        // EXIF date format is "YYYY:MM:DD HH:MM:SS"
        // Replace the first two colons with dashes to make it parseable
        const dateStr = value.replace(/^(\d{4}):(\d{2}):(\d{2})/, '$1-$2-$3')
        return new Date(dateStr).toLocaleString()

      case 'ExposureTime':
        if (typeof value === 'object' && value.numerator && value.denominator) {
          return value.numerator === 1 ? `1/${value.denominator}s` : `${value.numerator}/${value.denominator}s`
        }
        return `${value}s`

      case 'FNumber':
        if (typeof value === 'object' && value.numerator && value.denominator) {
          return `f/${value.numerator / value.denominator}`
        }
        return `f/${value}`

      case 'FocalLength':
        if (typeof value === 'object' && value.numerator && value.denominator) {
          return `${value.numerator / value.denominator}mm`
        }
        return `${value}mm`

      case 'Flash':
        const flashModes = {
          0: 'No Flash',
          1: 'Flash Fired',
          5: 'Strobe Return Light Not Detected',
          7: 'Strobe Return Light Detected',
          16: 'Compulsory Flash Mode',
          24: 'Compulsory Flash Mode, Return Light Not Detected',
          25: 'Compulsory Flash Mode, Return Light Detected'
        }
        return flashModes[value] || `Flash Mode ${value}`

      case 'Orientation':
        const orientations = {
          1: 'Normal',
          2: 'Flip Horizontal',
          3: 'Rotate 180°',
          4: 'Flip Vertical',
          5: 'Rotate 90° CCW + Flip Horizontal',
          6: 'Rotate 90° CW',
          7: 'Rotate 90° CW + Flip Horizontal',
          8: 'Rotate 90° CCW'
        }
        return orientations[value] || `Orientation ${value}`

      default:
        if (typeof value === 'object' && value.numerator && value.denominator) {
          return `${value.numerator}/${value.denominator}`
        }
        return String(value)
    }
  }

  const getDisplayName = (key) => {
    return usefulTags[key] || key
  }

  if (loading) return <div>Loading EXIF data...</div>

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8} className="mb-4">
          <div className="exif-tags py-2">
            {Object.keys(exifData).length > 0 ? (
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Camera Data ({Object.keys(exifData).length} items)
                  </Accordion.Header>
                  <Accordion.Body>
                    <dl className="row">
                      {Object.entries(exifData).map(([key, value]) => (
                        <div key={key} className="exif-item row mb-2">
                          <dt className="col-sm-4 text-truncate">{getDisplayName(key)}:</dt>
                          <dd className="col-sm-8">{formatExifValue(key, value)}</dd>
                        </div>
                      ))}
                    </dl>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ) : (
              <Alert variant="info" className="mt-2">
                No camera data available
              </Alert>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ExifTags
