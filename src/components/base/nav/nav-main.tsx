"use client";

import { ChevronRight } from "lucide-react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { NavigationMain } from "@/constants/paths";
import { Fragment } from "react";

interface NavMainProps {
  items: NavigationMain[];
}

export function NavMain({ items }: NavMainProps) {
  return (
    <Fragment>
      {items.map((item) => (
        <SidebarGroup key={item.group}>
          <SidebarGroupLabel>{item.group}</SidebarGroupLabel>
          <SidebarMenu>
            {item.menus.map((menu) => (
              <Collapsible key={menu.name} asChild>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip={menu.name}>
                    <a href={menu.href}>
                      <menu.icon />
                      <span>{menu.name}</span>
                    </a>
                  </SidebarMenuButton>
                  {menu.submenus?.length ? (
                    <>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuAction className="data-[state=open]:rotate-90">
                          <ChevronRight />
                          <span className="sr-only">Toggle</span>
                        </SidebarMenuAction>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {menu.submenus?.map((subMenu) => (
                            <SidebarMenuSubItem key={subMenu.name}>
                              <SidebarMenuSubButton asChild>
                                <a href={subMenu.href}>
                                  <span>{subMenu.name}</span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </Fragment>
  );
}
