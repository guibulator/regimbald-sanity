// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document schemas
import category from "./documents/category";
import post from "./documents/post";
import siteSettings from "./documents/siteSettings";
import page from "./documents/page";
import author from "./documents/author";

// Object types

import objects, { localizeObjects } from "./objects";
import { translateFields } from "./fieldTranslation";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "blog",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes
    .concat([
      // The following are document types which will appear
      // in the studio.
      siteSettings,
      post,
      category,
      page,
      // When added to this list, object types can be used as
      // { type: 'typename' } in other document schemas
      ,
    ])
    .concat([...objects])
    .concat(translateFields([author, ...localizeObjects])),
});
