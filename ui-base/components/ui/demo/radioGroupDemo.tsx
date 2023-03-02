import React from 'react';
import { RadioGroup, RadioGroupItem } from '../radio-group';

const RadioGroupDemo = () => (
  <form>
    <RadioGroup className="RadioGroupRoot" defaultValue="default" aria-label="View density">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroupItem className="RadioGroupItem" value="default" id="r1">
          {/* <RadioGroupIndicator className="RadioGroupIndicator" /> */}
        </RadioGroupItem>
        <label className="Label" htmlFor="r1">
          Default
        </label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroupItem className="RadioGroupItem" value="comfortable" id="r2">
          {/* <RadioGroupIndicator className="RadioGroupIndicator" /> */}
        </RadioGroupItem>
        <label className="Label" htmlFor="r2">
          Comfortable
        </label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroupItem className="RadioGroupItem" value="compact" id="r3">
          {/* <RadioGroupIndicator className="RadioGroupIndicator" /> */}
        </RadioGroupItem>
        <label className="Label" htmlFor="r3">
          Compact
        </label>
      </div>
    </RadioGroup>
  </form>
);

export default RadioGroupDemo;