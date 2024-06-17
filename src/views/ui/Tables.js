import ProjectTables from "../../Component/dashboard/ProjectTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const Tables = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <ProjectTables />
      </Col>
    </Row>
  );
};

export default Tables;
