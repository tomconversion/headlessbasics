import { CmsVariants, PageIdentifier } from "../../../constants"
import UmbracoFlexGrid from "../../umbraco-heartcore-grid";

export function dynamicContent(data) {
  return (
    <UmbracoFlexGrid name="Grid" sections={data.sections} />
  );
}


