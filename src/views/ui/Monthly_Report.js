import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";

const DownloadReport = () => {
  const reports = [
    { name: "monthly_report", label: "Monthly Report" },
    { name: "quarterly_report", label: "Quarterly Report" },
    { name: "annual_report", label: "Annual Report" }
  ];

  const formats = ["pdf", "docx", "xlsx"];

  return (
    <Row className="justify-content-center">
      <Col lg="8">
        <Card className="text-center mt-5">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-download me-2"> </i>
            Download Reports
          </CardTitle>
          <CardBody className="p-4">
            {reports.map((report, index) => (
              <div key={index} className="mb-4">
                <h5 className="mb-3">{report.label}</h5>
                {formats.map((format, formatIndex) => (
                  <Button
                    key={formatIndex}
                    color="primary"
                    href={`/path/to/${report.name}.${format}`}
                    download
                    className="me-2 mb-2"
                  >
                    Download {report.label} ({format.toUpperCase()})
                  </Button>
                ))}
              </div>
            ))}
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default DownloadReport;
