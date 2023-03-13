export function urlBuilder(topMostHolder:any){
  // if (topMostHolder?.slug) {
  //     let destination = topMostHolder?.slug;
      
  //     // check if destination slug starts with '/'
  //     if (destination.charAt(0) !== '/') {
  //       let currentParent = topMostHolder.parent;

  //       // add the final parent slug to the front of destination slug
  //       destination = `${currentParent.slug}/${destination}`;

  //       if (destination.charAt(0) !== '/')
  //             destination = `/${destination}`;

  //       if (currentParent.slug.charAt(0) === '/') return destination;

  //       // loop through parent levels until we find one that starts with '/'
  //       while (currentParent.parent && currentParent?.parent?.slug) {
  //         currentParent = currentParent?.parent;
  //         destination = `${currentParent.slug}${destination}`;  
  //         if (currentParent.slug.charAt(0) === '/') 
  //             return destination; 
             
  //         if (destination.charAt(0) !== '/')
  //             destination = `/${destination}`;
  //       }
  //     }

  //     return destination;
  // }
  return "/na";
}


export function mapBreadcrumbStructure(data) {
    
  let nodes = [];

  addNode(data);

  const breadcrumb = {
    heading: "Breadcrumb : Default",
    links: []
  };

  
  function addNode(content) {
    nodes.push(cleanupSingleLevel(content));
    if (content.parent) {
      addNode(content.parent);
    }
  }
    
  for(var i=nodes.length-1; i>-1; i--){
    let current = nodes[i];
    let link = current.slug.replace('/homepage', '');
    if(current.urlPath)
      link = current.urlPath;  
    if(current.superAlias){
      link = current.superAlias;
    }
    breadcrumb.links.push({
      href: link,
      text: current.name
    });
  }

  return breadcrumb;
}

export function cleanupSingleLevel(data) {  
  
  if(data.name){
    data.name = data.name.replace('/', '');
  }else if(data.navigationTitle){
    data.name = data.navigationTitle;
  }else if(data.labal){
    data.name = data.labal;
  }

  if(data.urlPath){
    data.slug = data.urlPath;
  }else if(data.url){
    data.slug = data.url;
    data.url = data.url.replace('/homepage', '');  
  }else if(data._seo?.urlPath){
    data.slug = data._seo.urlPath;
    data.url = data._seo.urlPath;  
  }

  return data;
}