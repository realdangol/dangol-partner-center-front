export type SidebarSubMenu = {
  title: string;
  href: string;
};

export type SidebarMenuType = {
  title: string;
  href?: string;
  subMenu?: SidebarSubMenu[];
};
