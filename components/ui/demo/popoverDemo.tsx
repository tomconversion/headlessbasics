import React from 'react';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { PopoverArrow, PopoverClose } from '@radix-ui/react-popover';

const PopoverDemo = () => (
  <Popover>
    <PopoverTrigger asChild>
      <button className="PopoverIconButton" aria-label="Update dimensions">
        <MixerHorizontalIcon />
      </button>
    </PopoverTrigger>

      <PopoverContent className="PopoverContent" sideOffset={5}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <p className="Text" style={{ marginBottom: 10 }}>
            Dimensions
          </p>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="width">
              Width
            </label>
            <input className="Input" id="width" defaultValue="100%" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="maxWidth">
              Max. width
            </label>
            <input className="Input" id="maxWidth" defaultValue="300px" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="height">
              Height
            </label>
            <input className="Input" id="height" defaultValue="25px" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="maxHeight">
              Max. height
            </label>
            <input className="Input" id="maxHeight" defaultValue="none" />
          </fieldset>
        </div>
        <PopoverClose className="PopoverClose" aria-label="Close">
          <Cross2Icon />
        </PopoverClose>
        <PopoverArrow className="PopoverArrow" />
      </PopoverContent>

  </Popover>
);

export default PopoverDemo;