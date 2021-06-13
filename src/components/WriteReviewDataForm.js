import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import {
  Form,
  FormGroup,
  ControlLabel,
  ButtonToolbar,
  Button,
  FormControl,
  HelpBlock,
  Row,
  Col,
} from "rsuite";
import "./styles/WriteReview.scss";

const WriteReviewDataForm = () => {
  const [address, setAddress] = useState("");
  const [agentName, setAgentName] = useState("");
  const [rentalAgency, setRentalAgency] = useState("");
  const [duration, setDuration] = useState("");
  const [propertyReview, setPropertyReview] = useState("");
  const [agentReview, setAgentReview] = useState("");
  const [propertyRating, setPropertyRating] = useState(1.0);
  const [agentRating, setAgentRating] = useState(1.0);
  const [propertyType, setPropertyType] = useState("");

  const onSubmit = (params) => {
    // save params to API

    const dataForSubmission = {
      address: address,
      agentName: agentName,
      agentAgency: rentalAgency,
      duration: duration,
      propertyType: propertyType,
      propertyReview: propertyReview,
      agentReview: agentReview,
      propertyRating: propertyRating,
      agentRating: agentRating,
    };

    console.log("save details to db");
    console.log(dataForSubmission);
    const post_url = "http://localhost:5000/api/reviews";
    axios
      .post(post_url, dataForSubmission)
      .then(() => console.log("Review Added"))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="writeReviewContainer">
      <div className="writeReviewHeading">
        <h3>Write your review</h3>
        Help us help others property finders like you!
      </div>
      <div className="writeReviewForm">
        <Form fluid>
          <FormGroup>
            <FormControl
              name="Address"
              placeholder="Address"
              onChange={(val) => setAddress(val)}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              name="AgentName"
              placeholder="Agent Name"
              onChange={(val) => setAgentName(val)}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              name="RentalAgency"
              placeholder="Rental Agency"
              onChange={(val) => setRentalAgency(val)}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              name="PropertyType"
              placeholder="Property Type"
              onChange={(val) => setRentalAgency(val)}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              name="Duration"
              placeholder="Duration"
              onChange={(val) => setDuration(val)}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              rows={3}
              name="PropertyReview"
              componentClass="textarea"
              overflow="scroll"
              placeholder="Property Review"
              onChange={(val) => setPropertyReview(val)}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              rows={3}
              name="AgentReview"
              componentClass="textarea"
              overflow="scroll"
              placeholder="Agent Review"
              onChange={(val) => setAgentReview(val)}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              name="PropertyRating"
              placeholder="Property Rating"
              onChange={(val) => setPropertyRating(val)}
            />
          </FormGroup>

          <FormGroup>
            <FormControl
              name="AgentRating"
              placeholder="Agent Rating"
              onChange={(val) => setAgentRating(val)}
            />
          </FormGroup>

          <FormGroup>
            <div className="writeReviewBtns">
              <div>
                <Button appearance="primary" onClick={onSubmit}>
                  Submit
                </Button>
              </div>
              <div>
                <Button appearance="default">Cancel</Button>
              </div>
            </div>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default WriteReviewDataForm;
