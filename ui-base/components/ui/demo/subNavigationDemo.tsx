import React, { forwardRef } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { cn } from "@/ui-base/lib/util/utils";

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Learn <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: 'span 3' }}>
                <NavigationMenu.Link asChild>
                  <a className="Callout" href="/">
                    <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="CalloutHeading">Radix Primitives</div>
                    <p className="CalloutText">Unstyled, accessible components for React.</p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <NavigationMenu.NavigationMenuLink href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </NavigationMenu.NavigationMenuLink>
              <NavigationMenu.NavigationMenuLink href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </NavigationMenu.NavigationMenuLink>
              <NavigationMenu.NavigationMenuLink href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </NavigationMenu.NavigationMenuLink>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Overview <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List two">
              <NavigationMenu.NavigationMenuLink title="Introduction" href="/docs/primitives/overview/introduction">
                Build high-quality, accessible design systems and web apps.
              </NavigationMenu.NavigationMenuLink>
              <NavigationMenu.NavigationMenuLink title="Getting started" href="/docs/primitives/overview/getting-started">
                A quick tutorial to get you up and running with Radix Primitives.
              </NavigationMenu.NavigationMenuLink>
              <NavigationMenu.NavigationMenuLink title="Styling" href="/docs/primitives/overview/styling">
                Unstyled and compatible with any styling solution.
              </NavigationMenu.NavigationMenuLink>
              <NavigationMenu.NavigationMenuLink title="Animation" href="/docs/primitives/overview/animation">
                Use CSS keyframes or any animation library of your choice.
              </NavigationMenu.NavigationMenuLink>
              <NavigationMenu.NavigationMenuLink title="Accessibility" href="/docs/primitives/overview/accessibility">
                Tested in a range of browsers and assistive technologies.
              </NavigationMenu.NavigationMenuLink>
              <NavigationMenu.NavigationMenuLink title="Releases" href="/docs/primitives/overview/releases">
                Radix Primitives releases and their changelogs.
              </NavigationMenu.NavigationMenuLink>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/radix-ui">
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

type Props = {
  title: string,
  children: React.ReactNode,
  className?: string,
};

const NavigationMenuLink = forwardRef<HTMLAnchorElement, Props>(
  ({ title, children, className, ...props }, ref) => (
    <a className={cn('ListItemLink', className)} {...props} ref={ref}>
      <div className="ListItemHeading">{title}</div>
      <p className="ListItemText">{children}</p>
    </a>
  )
);
NavigationMenuLink.displayName = "ListItem";

export default NavigationMenuDemo;