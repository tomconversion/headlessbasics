export function sanitiseForKontent(arg0: { slug: string }) {
    if (!arg0.slug.endsWith("/")) {
      arg0.slug = arg0.slug + "/";
    }
    return arg0;
  }
  