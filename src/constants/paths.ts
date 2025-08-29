import {
  Activity,
  Archive,
  FileText,
  LifeBuoy,
  Package,
  Send,
  type LucideIcon,
} from "lucide-react";

export type NavigationMain = {
  group: string;
  menus: NavigationMenu[];
};

export type NavigationMenu = {
  name: string;
  href: string;
  icon: LucideIcon;
  submenus: NavigationSubMenu[] | null;
};

export type NavigationSubMenu = {
  name: string;
  href: string;
};

export type NavigationSecondary = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export const NAVIGATION_MAIN: NavigationMain[] = [
  {
    group: "Overview",
    menus: [{ name: "Dashboard", href: "/", icon: Activity, submenus: null }],
  },
  {
    group: "Master Data",
    menus: [
      {
        name: "Produk",
        href: "#",
        icon: Package,
        submenus: [
          { name: "Daftar Produk", href: "/master/product" },
          { name: "Kategori Produk", href: "/master/product/category" },
        ],
      },
    ],
  },
  {
    group: "Transaksi",
    menus: [
      {
        name: "Manajemen Stok",
        href: "/transaction/stock",
        icon: Archive,
        submenus: null,
      },
    ],
  },
  {
    group: "Analisis",
    menus: [
      {
        name: "Laporan",
        href: "/analytics/report",
        icon: FileText,
        submenus: null,
      },
    ],
  },
];

export const NAVIGATION_SECONDARY: NavigationSecondary[] = [
  {
    name: "Bantuan",
    href: "#",
    icon: LifeBuoy,
  },
  {
    name: "Saran",
    href: "#",
    icon: Send,
  },
];
