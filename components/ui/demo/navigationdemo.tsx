import classNames from 'classnames';
import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from '../navigation-menu';


const NavigationMenuDemo = () => {
  return (
    <NavigationMenu className="NavigationMenuRoot">
      <NavigationMenuList className="NavigationMenuList">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="NavigationMenuTrigger">
            {/* Learn <CaretDownIcon className="CaretDown" aria-hidden /> */}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: 'span 3' }}>
                <NavigationMenuLink asChild>
                  <a className="Callout" href="/">
                    <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="CalloutHeading">Radix Primitives</div>
                    <p className="CalloutText">Unstyled, accessible components for React.</p>
                  </a>
                </NavigationMenuLink>
              </li>

              {/* <ListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem> */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="NavigationMenuTrigger">
            {/* Overview <CaretDownIcon className="CaretDown" aria-hidden /> */}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="NavigationMenuContent">
            <ul className="List two">
              {/* <ListItem title="Introduction" href="/docs/primitives/overview/introduction">
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem title="Getting started" href="/docs/primitives/overview/getting-started">
                A quick tutorial to get you up and running with Radix Primitives.
              </ListItem>
              <ListItem title="Styling" href="/docs/primitives/overview/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem title="Animation" href="/docs/primitives/overview/animation">
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem title="Accessibility" href="/docs/primitives/overview/accessibility">
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem title="Releases" href="/docs/primitives/overview/releases">
                Radix Primitives releases and their changelogs.
              </ListItem> */}
              <ListItem title="Releases" href="/docs/primitives/overview/releases">
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className="NavigationMenuLink" href="https://github.com/radix-ui">
            Github
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuIndicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenuIndicator>
      </NavigationMenuList>

      <div className="ViewportPosition">
        <NavigationMenuViewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu>
  );
};

const ListItem = ({ children, className, title, ...props }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={classNames('ListItemLink', className)}
          {...props}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};


export default NavigationMenuDemo;