import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs";

const TabsDemo = () => {
  
  // const [selectedIndex, setSelectedIndex] = useState(0);

  // const handleTabChange = (event: React.FormEvent<HTMLDivElement>) => {
  //   const target = event.target as HTMLDivElement;
  //   setSelectedIndex(Number(target));
  // };
  
  return (
    <Tabs>
      <TabsList>
        <TabsTrigger value={"0"}>Tab 1</TabsTrigger>
        <TabsTrigger value={"1"}>Tab 2</TabsTrigger>
        <TabsTrigger value={"2"}>Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value={"0"}>Content for tab 1</TabsContent>
      <TabsContent value={"1"}>Content for tab 2</TabsContent>
      <TabsContent value={"2"}>Content for tab 3</TabsContent>
    </Tabs>
  );
};

export default TabsDemo;
