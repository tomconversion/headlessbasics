import React from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import { Select, SelectContent, SelectGroup, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, SelectItem } from '../select';

const SelectDemo = () => (
  <Select>
    <SelectTrigger className="SelectTrigger" aria-label="Food">
      <SelectValue placeholder="Select a fruit…" />
      {/* <SelectIcon className="SelectIcon">
        <ChevronDownIcon />
      </SelectIcon> */}
    </SelectTrigger>

      <SelectContent className="SelectContent">
        {/* <SelectScrollUpButton className="SelectScrollButton">
          <ChevronUpIcon />
        </SelectScrollUpButton> */}
        {/* <SelectViewport className="SelectViewport"> */}
          <SelectGroup>
            <SelectLabel className="SelectLabel">Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>

          <SelectSeparator className="SelectSeparator" />

          <SelectGroup>
            <SelectLabel className="SelectLabel">Vegetables</SelectLabel>
            <SelectItem value="aubergine">Aubergine</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
            <SelectItem value="carrot" disabled>
              Carrot
            </SelectItem>
            <SelectItem value="courgette">Courgette</SelectItem>
            <SelectItem value="leek">leek</SelectItem>
          </SelectGroup>

          <SelectSeparator className="SelectSeparator" />

          <SelectGroup>
            <SelectLabel className="SelectLabel">Meat</SelectLabel>
            <SelectItem value="beef">Beef</SelectItem>
            <SelectItem value="chicken">Chicken</SelectItem>
            <SelectItem value="lamb">Lamb</SelectItem>
            <SelectItem value="pork">Pork</SelectItem>
          </SelectGroup>
        {/* </SelectViewport> */}
        {/* <SelectScrollDownButton className="SelectScrollButton">
          <ChevronDownIcon />
        </SelectScrollDownButton> */}
      </SelectContent>

  </Select>
);

export default SelectDemo;