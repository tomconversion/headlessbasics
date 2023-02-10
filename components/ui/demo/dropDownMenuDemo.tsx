import React from 'react';
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '../dropdown-menu';
import { DropdownMenuArrow, DropdownMenuItemIndicator } from '@radix-ui/react-dropdown-menu';
import { CheckedState } from '@radix-ui/react-checkbox';

const DropdownMenuDemo = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState<CheckedState>(true);
  const [urlsChecked, setUrlsChecked] = React.useState<CheckedState>(false);
  const [person, setPerson] = React.useState('pedro');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenuItem className="DropdownMenuItem">
            New Tab <div className="RightSlot">⌘+T</div>
          </DropdownMenuItem>
          <DropdownMenuItem className="DropdownMenuItem">
            New Window <div className="RightSlot">⌘+N</div>
          </DropdownMenuItem>
          <DropdownMenuItem className="DropdownMenuItem" disabled>
            New Private Window <div className="RightSlot">⇧+⌘+N</div>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="DropdownMenuSubTrigger">
              More Tools
              <div className="RightSlot">
                <ChevronRightIcon />
              </div>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent
                className="DropdownMenuSubContent"
                sideOffset={2}
                alignOffset={-5}
              >
                <DropdownMenuItem className="DropdownMenuItem">
                  Save Page As… <div className="RightSlot">⌘+S</div>
                </DropdownMenuItem>
                <DropdownMenuItem className="DropdownMenuItem">Create Shortcut…</DropdownMenuItem>
                <DropdownMenuItem className="DropdownMenuItem">Name Window…</DropdownMenuItem>
                <DropdownMenuSeparator className="DropdownMenu.Separator" />
                <DropdownMenuItem className="DropdownMenuItem">Developer Tools</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuSeparator className="DropdownMenuSeparator" />

          <DropdownMenuCheckboxItem
            className="DropdownMenuCheckboxItem"
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenuItemIndicator className="DropdownMenuItemIndicator">
              <CheckIcon />
            </DropdownMenuItemIndicator>
            Show Bookmarks <div className="RightSlot">⌘+B</div>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            className="DropdownMenuCheckboxItem"
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenuItemIndicator className="DropdownMenuItemIndicator">
              <CheckIcon />
            </DropdownMenuItemIndicator>
            Show Full URLs
          </DropdownMenuCheckboxItem>

          <DropdownMenuSeparator className="DropdownMenuSeparator" />

          <DropdownMenuLabel className="DropdownMenuLabel">People</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenuRadioItem className="DropdownMenuRadioItem" value="pedro">
              <DropdownMenuItemIndicator className="DropdownMenuItemIndicator">
                <DotFilledIcon />
              </DropdownMenuItemIndicator>
              Pedro Duarte
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem className="DropdownMenuRadioItem" value="colm">
              <DropdownMenuItemIndicator className="DropdownMenuItemIndicator">
                <DotFilledIcon />
              </DropdownMenuItemIndicator>
              Colm Tuite
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>

          <DropdownMenuArrow className="DropdownMenuArrow" />
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};

export default DropdownMenuDemo;