export function urlBuilder(topMostHolder:any){
    if (topMostHolder?.slug) {
        let destination = topMostHolder?.slug;
        
        // check if destination slug starts with '/'
        if (destination.charAt(0) !== '/') {
          let currentParent = topMostHolder.parent;
  
          // add the final parent slug to the front of destination slug
          destination = `/${currentParent.slug}/${destination}`;

          if (currentParent.slug.charAt(0) === '/') return destination;

          // loop through parent levels until we find one that starts with '/'
          while (currentParent.parent && currentParent?.parent?.slug) {
            currentParent = currentParent?.parent;
            destination = `${currentParent.slug}${destination}`;  
            if (currentParent.slug.charAt(0) === '/') return destination;    
            
            destination = `/${destination}`; 
          }
        }
  
        return destination;
    }
    return "/na";
}