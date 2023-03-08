import UmbracoFlexGrid from "../../../heartcore/umbraco-heartcore-grid";



export function dynamicContent(data) {
  return (
    <UmbracoFlexGrid name="Grid" sections={data.sections} />
  );
}


