import React from 'react';
import { DotFilledIcon, CheckIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from '../context-menu';
import { ContextMenuItemIndicator } from '@radix-ui/react-context-menu';
import { CheckedState } from '@radix-ui/react-checkbox';

const ContextMenuDemo = () => {
//   const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState<CheckedState>(false);
  const [person, setPerson] = React.useState('pedro');

  const [bookmarksChecked, setBookmarksChecked] = React.useState<CheckedState>(false);

//   const handleCheckedChange = (checked: CheckedState) => {
//     setBookmarksChecked(checked);
//   };

  return (
    <ContextMenu>
      <ContextMenuTrigger className="ContextMenuTrigger">Right click here.</ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuContent className="ContextMenuContent">
          <ContextMenuItem className="ContextMenuItem">
            Back <div className="RightSlot">⌘+[</div>
          </ContextMenuItem>
          <ContextMenuItem className="ContextMenuItem" disabled>
            Foward <div className="RightSlot">⌘+]</div>
          </ContextMenuItem>
          <ContextMenuItem className="ContextMenuItem">
            Reload <div className="RightSlot">⌘+R</div>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger className="ContextMenuSubTrigger">
              More Tools
              <div className="RightSlot">
                <ChevronRightIcon />
              </div>
            </ContextMenuSubTrigger>
            <ContextMenuPortal>
              <ContextMenuSubContent
                className="ContextMenuSubContent"
                sideOffset={2}
                alignOffset={-5}
              >
                <ContextMenuItem className="ContextMenuItem">
                  Save Page As… <div className="RightSlot">⌘+S</div>
                </ContextMenuItem>
                <ContextMenuItem className="ContextMenuItem">Create Shortcut…</ContextMenuItem>
                <ContextMenuItem className="ContextMenuItem">Name Window…</ContextMenuItem>
                <ContextMenuSeparator className="ContextMenuSeparator" />
                <ContextMenuItem className="ContextMenuItem">Developer Tools</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuPortal>
          </ContextMenuSub>

          <ContextMenuSeparator className="ContextMenuSeparator" />

          <ContextMenuCheckboxItem
            className="ContextMenuCheckboxItem"
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <ContextMenuItemIndicator className="ContextMenuItemIndicator">
              <CheckIcon />
            </ContextMenuItemIndicator>
            Show Bookmarks <div className="RightSlot">⌘+B</div>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            className="ContextMenuCheckboxItem"
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <ContextMenuItemIndicator className="ContextMenuItemIndicator">
              <CheckIcon />
            </ContextMenuItemIndicator>
            Show Full URLs
          </ContextMenuCheckboxItem>

          <ContextMenuSeparator className="ContextMenuSeparator" />

          <ContextMenuLabel className="ContextMenuLabel">People</ContextMenuLabel>
          <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
            <ContextMenuRadioItem className="ContextMenuRadioItem" value="pedro">
              <ContextMenuItemIndicator className="ContextMenuItemIndicator">
                <DotFilledIcon />
              </ContextMenuItemIndicator>
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem className="ContextMenuRadioItem" value="colm">
              <ContextMenuItemIndicator className="ContextMenuItemIndicator">
                <DotFilledIcon />
              </ContextMenuItemIndicator>
              Colm Tuite
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenuPortal>
    </ContextMenu>
  );
};

export default ContextMenuDemo;