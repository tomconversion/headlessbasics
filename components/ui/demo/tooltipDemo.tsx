import { PlusIcon } from "@radix-ui/react-icons";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import React, { useState } from "react";
import { Button } from "../button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip";

const TooltipDemo = () => {
  
  // const [selectedIndex, setSelectedIndex] = useState(0);

  // const handleTabChange = (event: React.FormEvent<HTMLDivElement>) => {
  //   const target = event.target as HTMLDivElement;
  //   setSelectedIndex(Number(target));
  // };
  
  return (
    <TooltipProvider>
    <Tooltip>
      
      <TooltipTrigger asChild>
        <Button className="IconButton">
          <PlusIcon />
        </Button>
      </TooltipTrigger>

        <TooltipContent className="TooltipContent" sideOffset={5}>
          Add to library
          <TooltipArrow className="TooltipArrow" />
        </TooltipContent>
        
    </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipDemo;
