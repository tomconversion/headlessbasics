import React from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../accordion';

export const AccordionDemo = () => (
    <Accordion className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
      <AccordionItem className="AccordionItem" value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
  
      <AccordionItem className="AccordionItem" value="item-2">
        <AccordionTrigger>Is it unstyled?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s unstyled by default, giving you freedom over the look and feel.
        </AccordionContent>
      </AccordionItem>
  
      <AccordionItem className="AccordionItem" value="item-3">
        <AccordionTrigger>Can it be animated?</AccordionTrigger>
        <AccordionContent>
          
            Yes! You can animate the Accordion with CSS or JavaScript.
          
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );