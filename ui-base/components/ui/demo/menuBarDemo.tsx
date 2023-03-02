import React from 'react';
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '../menubar';

const RADIO_ITEMS = ['Andy', 'Benoît', 'Luis'];
const CHECK_ITEMS = ['Always Show Bookmarks Bar', 'Always Show Full URLs'];

const MenubarDemo = () => {
  const [checkedSelection, setCheckedSelection] = React.useState([CHECK_ITEMS[1]]);
  const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);

  return (
    <Menubar className="MenubarRoot">
      <MenubarMenu>
        <MenubarTrigger className="MenubarTrigger">File</MenubarTrigger>
        <MenubarPortal>
          <MenubarContent className="MenubarContent" align="start" sideOffset={5} alignOffset={-3}>
            <MenubarItem className="MenubarItem">
              New Tab <div className="RightSlot">⌘ T</div>
            </MenubarItem>
            <MenubarItem className="MenubarItem">
              New Window <div className="RightSlot">⌘ N</div>
            </MenubarItem>
            <MenubarItem className="MenubarItem" disabled>
              New Incognito Window
            </MenubarItem>
            <MenubarSeparator className="MenubarSeparator" />
            <MenubarSub>
              <MenubarSubTrigger className="MenubarSubTrigger">
                Share
                <div className="RightSlot">
                  <ChevronRightIcon />
                </div>
              </MenubarSubTrigger>
              <MenubarPortal>
                <MenubarSubContent className="MenubarSubContent" alignOffset={-5}>
                  <MenubarItem className="MenubarItem">Email Link</MenubarItem>
                  <MenubarItem className="MenubarItem">Messages</MenubarItem>
                  <MenubarItem className="MenubarItem">Notes</MenubarItem>
                </MenubarSubContent>
              </MenubarPortal>
            </MenubarSub>
            <MenubarSeparator className="MenubarSeparator" />
            <MenubarItem className="MenubarItem">
              Print… <div className="RightSlot">⌘ P</div>
            </MenubarItem>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="MenubarTrigger">Edit</MenubarTrigger>
        <MenubarPortal>
          <MenubarContent className="MenubarContent" align="start" sideOffset={5} alignOffset={-3}>
            <MenubarItem className="MenubarItem">
              Undo <div className="RightSlot">⌘ Z</div>
            </MenubarItem>
            <MenubarItem className="MenubarItem">
              Redo <div className="RightSlot">⇧ ⌘ Z</div>
            </MenubarItem>
            <MenubarSeparator className="MenubarSeparator" />
            <MenubarSub>
              <MenubarSubTrigger className="MenubarSubTrigger">
                Find
                <div className="RightSlot">
                  <ChevronRightIcon />
                </div>
              </MenubarSubTrigger>

              <MenubarPortal>
                <MenubarSubContent className="MenubarSubContent" alignOffset={-5}>
                  <MenubarItem className="MenubarItem">Search the web…</MenubarItem>
                  <MenubarSeparator className="MenubarSeparator" />
                  <MenubarItem className="MenubarItem">Find…</MenubarItem>
                  <MenubarItem className="MenubarItem">Find Next</MenubarItem>
                  <MenubarItem className="MenubarItem">Find Previous</MenubarItem>
                </MenubarSubContent>
              </MenubarPortal>
            </MenubarSub>
            <MenubarSeparator className="MenubarSeparator" />
            <MenubarItem className="MenubarItem">Cut</MenubarItem>
            <MenubarItem className="MenubarItem">Copy</MenubarItem>
            <MenubarItem className="MenubarItem">Paste</MenubarItem>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="MenubarTrigger">View</MenubarTrigger>
        <MenubarPortal>
          <MenubarContent
            className="MenubarContent"
            align="start"
            sideOffset={5}
            alignOffset={-14}
          >
            {CHECK_ITEMS.map((item) => (
              <MenubarCheckboxItem
                className="MenubarCheckboxItem inset"
                key={item}
                checked={checkedSelection.includes(item)}
                onCheckedChange={() =>
                  setCheckedSelection((current) =>
                    current.includes(item)
                      ? current.filter((el) => el !== item)
                      : current.concat(item)
                  )
                }
              >
                {/* <MenubarItemIndicator className="MenubarItemIndicator">
                  <CheckIcon />
                </MenubarItemIndicator> */}
                {item}
              </MenubarCheckboxItem>
            ))}
            <MenubarSeparator className="MenubarSeparator" />
            <MenubarItem className="MenubarItem inset">
              Reload <div className="RightSlot">⌘ R</div>
            </MenubarItem>
            <MenubarItem className="MenubarItem inset" disabled>
              Force Reload <div className="RightSlot">⇧ ⌘ R</div>
            </MenubarItem>
            <MenubarSeparator className="MenubarSeparator" />
            <MenubarItem className="MenubarItem inset">Toggle Fullscreen</MenubarItem>
            <MenubarSeparator className="MenubarSeparator" />
            <MenubarItem className="MenubarItem inset">Hide Sidebar</MenubarItem>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="MenubarTrigger">Profiles</MenubarTrigger>
        <MenubarPortal>
          <MenubarContent
            className="MenubarContent"
            align="start"
            sideOffset={5}
            alignOffset={-14}
          >
            <MenubarRadioGroup value={radioSelection} onValueChange={setRadioSelection}>
              {RADIO_ITEMS.map((item) => (
                <MenubarRadioItem className="MenubarRadioItem inset" key={item} value={item}>
                  {/* <MenubarItemIndicator className="MenubarItemIndicator">
                    <DotFilledIcon />
                  </MenubarItemIndicator> */}
                  {item}
                </MenubarRadioItem>
              ))}
              <MenubarSeparator className="MenubarSeparator" />
              <MenubarItem className="MenubarItem inset">Edit…</MenubarItem>
              <MenubarSeparator className="MenubarSeparator" />
              <MenubarItem className="MenubarItem inset">Add Profile…</MenubarItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>
    </Menubar>
  );
};

export default MenubarDemo;