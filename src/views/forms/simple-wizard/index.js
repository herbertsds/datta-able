import PropTypes from 'prop-types';
import { Card, Row, Col, Button } from 'react-bootstrap';
import Wizard from 'react-simple-step-wizard';
import React, { useState } from 'react';

const Step1 = () => <h4>This is Step 1</h4>;
const Step2 = () => <h4>This is Step 2</h4>;
const Step3 = () => <h4>This is Step 3</h4>;
const Step4 = () => <h4>This is Step 4</h4>;
const Step5 = () => <h4>This is Step 5</h4>;

const MyStepTracker = ({ currentStep = 0, steps = [] }) => (
  <div>
    <p>Current step is: {steps[currentStep]}</p>
  </div>
);

MyStepTracker.propTypes = {
  currentStep: PropTypes.number,
  steps: PropTypes.array
};

const MyNavigator = ({ getFirstStepProps, getLastStepProps, getNextStepProps, getPrevStepProps }) => (
  <React.Fragment>
    <div className="float-end">
      <Button type="button" {...getFirstStepProps()}>
        First
      </Button>
      <Button type="button" className="mx-2" {...getPrevStepProps()}>
        Back
      </Button>
      <Button type="button" className="mx-2" {...getNextStepProps()}>
        Next
      </Button>
      <Button type="button" {...getLastStepProps()}>
        Last
      </Button>
    </div>
  </React.Fragment>
);

MyNavigator.propTypes = {
  getFirstStepProps: PropTypes.func,
  getLastStepProps: PropTypes.func,
  getNextStepProps: PropTypes.func,
  getPrevStepProps: PropTypes.func
};

const SimpleWizard = () => {
  const [isCustomizeVisible, setIsCustomizeVisible] = useState(true);

  const handleStepChange = (currentStep) => {
    console.log(currentStep);
  };

  const onClick = () => {
    setIsCustomizeVisible((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <Card>
        <Card.Header>
          <Card.Title as="h5">Simple Step Wizard</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col sm={12}>
              <p>Step 3 visible: {isCustomizeVisible.toString()}</p>
              <Button type="button" onClick={onClick}>
                Toggle Step 3
              </Button>
            </Col>
            <Col sm={12} className="step-wizard">
              <Wizard onStepChange={handleStepChange}>
                <Wizard.StepTracker />
                <Wizard.Steps>
                  <Step1 stepLabel={'Search'} />
                  <Step2 stepLabel={'Select'} />
                  <Step3 stepLabel={'Customize'} stepCondition={isCustomizeVisible} />
                  <Step4 stepLabel={'Review'} />
                  <Step5 stepLabel={'Submit'} />
                </Wizard.Steps>
                <Wizard.StepTracker>{(stepTrackerProps) => <MyStepTracker {...stepTrackerProps} />}</Wizard.StepTracker>
                <Wizard.Navigator>{(navigatorProps) => <MyNavigator {...navigatorProps} />}</Wizard.Navigator>
              </Wizard>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default SimpleWizard;
