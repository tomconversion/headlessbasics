import UmbracoFlexGrid from "../umbraco-heartcore-grid";


export function gridContent(data) {
  console.log("Umbraco > gridContent", data);
  return (
    <UmbracoFlexGrid name="Grid" sections={data.sections} />
  );
}


