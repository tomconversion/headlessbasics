import { Cross2Icon, RowSpacingIcon } from "@radix-ui/react-icons";
import React from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../collapsible";

const CollapsibleDemo = () => {
    const [open, setOpen] = React.useState(false);
    return (
      <Collapsible className="CollapsibleRoot" open={open} onOpenChange={setOpen}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className="Text" style={{ color: 'white' }}>
            @peduarte starred 3 repositories
          </span>
          <CollapsibleTrigger asChild>
            <button className="IconButton">{open ? <Cross2Icon /> : <RowSpacingIcon />}</button>
          </CollapsibleTrigger>
        </div>
  
        <div className="Repository">
          <span className="Text">This area opens. @radix-ui/primitives</span>
        </div>
  
        <CollapsibleContent>
          <div className="Repository">
            <span className="Text">@radix-ui/colors</span>
          </div>
          <div className="Repository">
            <span className="Text">@stitches/react</span>
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  };
  
  export default CollapsibleDemo;