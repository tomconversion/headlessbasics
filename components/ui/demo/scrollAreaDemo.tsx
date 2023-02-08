import React from 'react';
import { ScrollArea } from '../scroll-area';

const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

const ScrollAreaDemo = () => (
  <ScrollArea className="ScrollAreaRoot">   
      <div style={{ padding: '15px 20px' }}>
        <div className="Text">Tags</div>
        {TAGS.map((tag) => (
          <div className="Tag" key={tag}>
            {tag}
          </div>
        ))}
      </div>
  </ScrollArea>
);

export default ScrollAreaDemo;