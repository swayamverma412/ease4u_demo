import { useState } from 'react';
import { Card, CardBody, CardSubtitle, CardTitle, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap';
import Chart from 'react-apexcharts';

const SalesChart = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    receivingPlant: false,
    sendingPlant: false,
    requestPlant: false,
    timeFrame: false,
  });

  const toggleDropdown = (filter) => {
    setDropdownOpen(prevState => ({
      ...prevState,
      [filter]: !prevState[filter],
    }));
  };

  const handleFilterSelect = (filter, value) => {
    // Implement logic to handle filter selection
    console.log(`Selected ${filter}: ${value}`);
    // Update state or perform other actions based on the selected filter
  };

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ['transparent'],
    },
    legend: {
      show: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
        borderRadius: 2,
      },
    },
    colors: ['#0d6efd', '#009efb', '#6771dc'],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '60%',
              borderRadius: 7,
            },
          },
        },
      },
    ],
  };

  // Sample data based on selected filters
  const getChartData = () => {
    // Example logic based on selected filters
    let data2020 = [20, 40, 50, 30, 40, 50, 30, 30, 40];
    let data2022 = [10, 20, 40, 60, 20, 40, 60, 60, 20];

    // Adjust data based on filters (receivingPlant, sendingPlant, requestPlant, timeFrame)
    // Replace with actual logic based on your application's requirements

    return [
      {
        name: '2020',
        data: data2020,
      },
      {
        name: '2022',
        data: data2022,
      },
    ];
  };

  const series = getChartData();

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Sales Summary</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Yearly Sales Report
        </CardSubtitle>

        <Row className="mb-3">
          {/* Receiving Plant Filter */}
          <Col sm="6" md="3" className="m-5">
            <ButtonDropdown isOpen={dropdownOpen.receivingPlant} toggle={() => toggleDropdown('receivingPlant')} style={{ width: '100%' }}>
              <DropdownToggle caret color="primary">
                Receiving Plant
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => handleFilterSelect('Receiving Plant', 'Plant A')}>Plant A</DropdownItem>
                <DropdownItem onClick={() => handleFilterSelect('Receiving Plant', 'Plant B')}>Plant B</DropdownItem>
                {/* Add more DropdownItems as needed */}
              </DropdownMenu>
            </ButtonDropdown>
          </Col>

          {/* Sending Plant Filter */}
          <Col sm="6" md="3" className="m-5">
            <ButtonDropdown isOpen={dropdownOpen.sendingPlant} toggle={() => toggleDropdown('sendingPlant')} style={{ width: '100%' }}>
              <DropdownToggle caret color="primary">
                Sending Plant
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => handleFilterSelect('Sending Plant', 'Plant X')}>Plant X</DropdownItem>
                <DropdownItem onClick={() => handleFilterSelect('Sending Plant', 'Plant Y')}>Plant Y</DropdownItem>
                {/* Add more DropdownItems as needed */}
              </DropdownMenu>
            </ButtonDropdown>
          </Col>

          {/* Request Plant Filter */}
          <Col sm="6" md="3" className="m-5">
            <ButtonDropdown isOpen={dropdownOpen.requestPlant} toggle={() => toggleDropdown('requestPlant')} style={{ width: '100%' }}>
              <DropdownToggle caret color="primary">
                Request Plant
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => handleFilterSelect('Request Plant', 'Plant 1')}>Plant 1</DropdownItem>
                <DropdownItem onClick={() => handleFilterSelect('Request Plant', 'Plant 2')}>Plant 2</DropdownItem>
                {/* Add more DropdownItems as needed */}
              </DropdownMenu>
            </ButtonDropdown>
          </Col>

          {/* Time Frame Filter */}
          <Col sm="6" md="3" className=" m-5">
            <ButtonDropdown isOpen={dropdownOpen.timeFrame} toggle={() => toggleDropdown('timeFrame')} style={{ width: '100%' }}>
              <DropdownToggle caret color="primary">
                Time Frame
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => handleFilterSelect('Time Frame', 'This Week')}>This Week</DropdownItem>
                <DropdownItem onClick={() => handleFilterSelect('Time Frame', 'This Month')}>This Month</DropdownItem>
                {/* Add more DropdownItems as needed */}
              </DropdownMenu>
            </ButtonDropdown>
          </Col>
        </Row>

        <Chart options={options} series={series} type="bar" height="379" />
      </CardBody>
    </Card>
  );
};

export default SalesChart;
