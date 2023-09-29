import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

function ShiipingMethod() {
  const [selectedValue, setSelectedValue] = useState('usps');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <section className="container-fluid mt-4 shipping-method">
      <h4>Shipping method</h4>
      <section className="shipping-container">
        <FormControl sx={{ width: '100%' }}>
          <RadioGroup
            aria-labelledby="shipping method"
            name="shipping method"
            value={selectedValue}
            onChange={handleRadioChange}
            sx={{ width: '100%' }}
          >
            <article
              className={`d-flex flex-row justify-content-between ${
                selectedValue === 'usps' ? 'active-selected' : 'article'
              }`}
            >
              <div>
                <FormControlLabel
                  value="usps"
                  control={<Radio />}
                  label={
                    <ul className="p-0">
                      <li className="mt-4 p-0 element1">
                        USPS First Class Package International
                      </li>
                      <li className="label-element">7 to 21 business days</li>
                    </ul>
                  }
                />
              </div>
              <div>
                <h6 className="mt-4 p-0 element1">$16.25</h6>
              </div>
            </article>
            <article
              className={`d-flex flex-row justify-content-between ${
                selectedValue === 'dhl' ? 'active-selected' : 'article'
              }`}
            >
              <div>
                <FormControlLabel
                  value="dhl"
                  control={<Radio />}
                  label={
                    <ul className="p-0">
                      <li className="mt-4 p-0 element1">
                        DHL Express Worldwide
                      </li>
                      <li className="label-element">2 to 3 business days</li>
                    </ul>
                  }
                />
              </div>
              <div>
                <h6 className="mt-4 p-0 element1">$35.21</h6>
              </div>
            </article>
            <article
              className={`d-flex flex-row justify-content-between ${
                selectedValue === 'usps-priority'
                  ? 'active-selected'
                  : 'article'
              }`}
            >
              <div>
                <FormControlLabel
                  value="usps-priority"
                  control={<Radio />}
                  label={
                    <ul className="p-0">
                      <li className="mt-4 p-0 element1">
                        USPS Priority Mail International
                      </li>
                      <li className="label-element">6 to 10 business days</li>
                    </ul>
                  }
                />
              </div>
              <div>
                <h6 className="mt-4 p-0 element1">$56.02</h6>
              </div>
            </article>
            <article
              className={`d-flex flex-row justify-content-between ${
                selectedValue === 'usps-priority-mail'
                  ? 'active-selected'
                  : 'article'
              }`}
            >
              <div>
                <FormControlLabel
                  value="usps-priority-mail"
                  control={<Radio />}
                  label={
                    <ul className="p-0">
                      <li className="mt-4 p-0 element1">
                        USPS Priority Mail Express International
                      </li>
                      <li className="label-element">3 to 5 business days</li>
                    </ul>
                  }
                />
              </div>
              <div>
                <h6 className="mt-4 p-0 element1">$58.02</h6>
              </div>
            </article>
          </RadioGroup>
        </FormControl>
      </section>
    </section>
  );
}

export default ShiipingMethod;
