import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

const About = () => {
  return (
    <Row className="justify-content-center">
      <Col lg="8">
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1: Best Packing Practices */}
        {/* --------------------------------------------------------------------------------*/}
        <Card className="mb-4">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0 text-center">
            <i className="bi bi-box-seam me-2"> </i>
            Best Packing Practices
          </CardTitle>
          <CardBody className="p-4 text-center">
            <Row>
              <Col>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/your_video_id" // Replace with actual video ID
                    allowFullScreen
                    title="Best Packing Practices"
                  ></iframe>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-2: How to Measure */}
        {/* --------------------------------------------------------------------------------*/}
        <Card className="mb-4">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0 text-center">
            <i className="bi bi-ruler me-2"> </i>
            How to Measure
          </CardTitle>
          <CardBody className="p-4 text-center">
            <Row>
              <Col>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/another_video_id" // Replace with actual video ID
                    allowFullScreen
                    title="How to Measure"
                  ></iframe>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
