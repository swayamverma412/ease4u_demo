import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const Forms = () => {
  // State to manage the declared value
  const [declaredValue, setDeclaredValue] = useState("");
  // State to manage the visibility of the e-way bill upload
  const [showEWayBillUpload, setShowEWayBillUpload] = useState(false);

  // Handle changes to the declared value
  const handleDeclaredValueChange = (e) => {
    const value = e.target.value;
    setDeclaredValue(value);

    // Show the e-way bill upload if the declared value exceeds 50,000
    if (parseFloat(value) > 50000) {
      setShowEWayBillUpload(true);
    } else {
      setShowEWayBillUpload(false);
    }
  };

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-textarea-resize "> </i>
            Shipment Form
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="exampleUsername">Username</Label>
                <Input
                  id="exampleUsername"
                  name="Username"
                  required
                  placeholder="coca cola"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  required
                  placeholder="demo@cocacola.com"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleDate">Pick-Up Date</Label>
                <Input
                  id="exampleDate"
                  name="date"
                  required
                  placeholder="Select a date"
                  type="date"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelectSending">Sending Plant</Label>
                <Input id="exampleSelectSending" name="sendingPlant" type="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelectReceiving">Receiving Plant</Label>
                <Input id="exampleSelectReceiving" name="receivingPlant" type="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelectCategory">Item Category</Label>
                <Input id="exampleSelectCategory" name="category" type="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Item Details</Label>
                <Input id="exampleText" name="details" type="textarea" />
              </FormGroup>
              <FormGroup>
                <Label for="totalWeight">Total Weight of Shipment (kg)</Label>
                <Input
                  id="totalWeight"
                  name="totalWeight"
                  required
                  placeholder="Enter the total weight"
                  type="number"
                />
              </FormGroup>
              <FormGroup>
                <Label for="totalBoxes">Total Number of Boxes</Label>
                <Input
                  id="totalBoxes"
                  name="totalBoxes"
                  required
                  placeholder="Enter the total number of boxes"
                  type="number"
                />
              </FormGroup>
              <FormGroup>
                <Label for="boxTypes">Number of Box Size Variations</Label>
                <Input
                  id="boxTypes"
                  name="boxTypes"
                  required
                  placeholder="Enter the number of box size variations"
                  type="number"
                />
              </FormGroup>
              <FormGroup>
                <Label for="box1Dimensions">Dimensions of Box Type 1 (LxWxH in cm)</Label>
                <Input
                  id="box1Length"
                  name="box1Length"
                  required
                  placeholder="Length"
                  type="number"
                />
                <Input
                  id="box1Width"
                  name="box1Width"
                  required
                  placeholder="Width"
                  type="number"
                />
                <Input
                  id="box1Height"
                  name="box1Height"
                  required
                  placeholder="Height"
                  type="number"
                />
                <Label for="box1Quantity">Quantity of Box Type 1</Label>
                <Input
                  id="box1Quantity"
                  name="box1Quantity"
                  required
                  placeholder="Enter the quantity"
                  type="number"
                />
              </FormGroup>
              <FormGroup>
                <Label for="box2Dimensions">Dimensions of Box Type 2 (LxWxH in cm)</Label>
                <Input
                  id="box2Length"
                  name="box2Length"
                  required
                  placeholder="Length"
                  type="number"
                />
                <Input
                  id="box2Width"
                  name="box2Width"
                  required
                  placeholder="Width"
                  type="number"
                />
                <Input
                  id="box2Height"
                  name="box2Height"
                  required
                  placeholder="Height"
                  type="number"
                />
                <Label for="box2Quantity">Quantity of Box Type 2</Label>
                <Input
                  id="box2Quantity"
                  name="box2Quantity"
                  required
                  placeholder="Enter the quantity"
                  type="number"
                />
              </FormGroup>
              <FormGroup>
                <Label for="declaredValue">Declared Value</Label>
                <Input
                  id="declaredValue"
                  name="declaredValue"
                  required
                  placeholder="Enter the declared value"
                  type="number"
                  value={declaredValue}
                  onChange={handleDeclaredValueChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="invoiceNumber">Invoice / Challan No</Label>
                <Input
                  id="invoiceNumber"
                  name="invoiceNumber"
                  required
                  placeholder="Enter the Invoice no"
                  type="text"
                />
              </FormGroup>

              {showEWayBillUpload && (
                <FormGroup>
                  <Label for="ewayBill">Upload E-Way Bill</Label>
                  <Input id="ewayBill" name="ewayBill" type="file" />
                  <FormText color="muted">
                    Please upload the e-way bill if the declared value exceeds 50,000.
                  </FormText>
                </FormGroup>
              )}

              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>
                  This is some placeholder block-level help text for the above input.
                </FormText>
              </FormGroup>


              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
