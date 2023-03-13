import { CmsVariants, PageIdentifier } from "../../constants"
import UmbracoFlexGrid from "../umbraco-heartcore-grid";

export function subComponentContent(data) {
  return (
    <UmbracoFlexGrid name="Grid" sections={data.sections} />
  );
}


