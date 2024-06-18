import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Input,
  Button,
} from "reactstrap";
import { CSVLink } from "react-csv";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
  {
    avatar: user1,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user2,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Lading pro React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user3,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Elite React",
    status: "holt",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user4,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Ample React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
];

const ProjectTables = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStatusFilter = (e) => {
    setStatusFilter(e.target.value);
  };

  const filteredData = tableData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter ? item.status === statusFilter : true)
  );

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Project Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle>

          <div className="d-flex justify-content-between mb-3">
            <Input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={handleSearch}
              style={{ maxWidth: "200px" }}
            />
            <Input
              type="select"
              value={statusFilter}
              onChange={handleStatusFilter}
              style={{ maxWidth: "200px" }}
            >
              <option value="">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="holt">Holt</option>
              <option value="done">Done</option>
            </Input>
            <Button color="primary">
              <CSVLink
                data={filteredData}
                filename={"project_data.csv"}
                style={{ color: "white", textDecoration: "none" }}
              >
                Export CSV
              </CSVLink>
            </Button>
          </div>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Team Lead</th>
                <th>Project</th>
                <th>Status</th>
                <th>Weeks</th>
                <th>Budget</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.project}</td>
                  <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>{tdata.weeks}</td>
                  <td>{tdata.budget}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
