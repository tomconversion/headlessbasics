import UmbracoFlexGrid from "../umbraco-heartcore-grid";


export function gridContent(data) {
  return (
    <UmbracoFlexGrid name="Grid" sections={data.sections} />
  );
}


