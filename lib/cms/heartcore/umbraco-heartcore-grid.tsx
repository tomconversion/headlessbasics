import React from 'react';

interface ControlProps {
  value: any;
  editor: {
    name: string;
    alias: string;
  };
}

interface AreaProps {
  grid: string;
  controls: ControlProps[];
}

interface RowProps {
  id: string;
  name: string;
  areas: AreaProps[];
}

interface SectionProps {
  grid: string;
  rows: RowProps[];
}

interface FlexProps {
  name: string;
  sections: SectionProps[];
}

const RenderControls = ({ controls }: { controls: ControlProps[] }) => (
  <>
    {controls.map((control, index) => {
      switch (control.editor.alias) {
        case 'my-headline':
          return <h1 key={index}>{control.value}</h1>;
        case 'my-quote':
          return <blockquote key={index}>{control.value}</blockquote>;
        case 'my-image':
          return <img key={index} src={control.value.url} alt={control.value.altText} />;
        case 'my-rte':
          return <div key={index} dangerouslySetInnerHTML={{ __html: control.value }} />;
        default:
          return <div key={index}>{control.value}</div>;
      }
    })}
  </>
);

const RenderArea = ({ area }: { area: AreaProps }) => {
  return (
    <div className={`w-full`}>
      <RenderControls controls={area.controls} />
    </div>
  );
};

const RenderRow = ({ row }: { row: RowProps }) => {
  const width = `columns-${row.areas.length}`;
  return (<div className={`RenderRow flex flex-wrap ${width}`}>
    {row.areas.map((area, index) => (
      <RenderArea key={index} area={area} />
    ))}
  </div>
  );
};

const RenderSection = ({ section }: { section: SectionProps }) => (
  <>
    {section.rows.map((row, index) => (
      <RenderRow key={index} row={row} />
    ))}
  </>
);

const Flex: React.FC<FlexProps> = ({ name, sections }) => (
  <>
    {sections.map((section, index) => (
      <RenderSection key={index} section={section} />
    ))}
  </>
);

export default Flex;