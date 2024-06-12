import React from 'react';
import { useContext } from 'react';
import MultiStep from 'react-multistep';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import { Card } from 'react-bootstrap';
import { ConfigContext } from '../../../contexts/ConfigContext';

const steps = [{ component: <StepOne /> }, { component: <StepTwo /> }, { component: <StepThree /> }, { component: <StepFour /> }];

const FormMultistep = () => {
  const configContext = useContext(ConfigContext);
  const { rtlLayout } = configContext.state;
  return (
    <React.Fragment>
      <Card>
        <Card.Header>
          <Card.Title as="h5">Form MultiStep</Card.Title>
        </Card.Header>
        <Card.Body style={{ overflowX: 'auto' }} className="step-wizard-multi-step">
          <MultiStep
            steps={steps}
            showNavigation={true}
            prevButton={{
              style: {
                border: '2px solid #4099ff',
                padding: '0.375rem 0.95rem',
                fontWeight: 400,
                textAlign: 'center',
                fontSize: '0.875rem',
                borderRadius: '5px',
                background: 'transparent',
                color: '#adb7be'
              }
            }}
            nextButton={{
              style: {
                position: rtlLayout ? 'absolute' : 'unset',
                left: rtlLayout ? 40 : 'inherit',
                border: '2px solid #4099ff',
                float: 'right',
                padding: '0.375rem 0.95rem',
                fontWeight: 400,
                textAlign: 'center',
                fontSize: '0.875rem',
                borderRadius: '5px',
                background: 'transparent',
                color: '#adb7be'
              }
            }}
          />
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default FormMultistep;
