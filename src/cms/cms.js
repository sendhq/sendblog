import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import BlogPostPreview from "./preview-templates/BlogPostPreview";
import WebsitePreview from "./preview-templates/IndexPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", WebsitePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
