import Category from "@/components/icons/category";
import Logs from "@/components/icons/clipboard";
import Templates from "@/components/icons/cloud_download";
import Home from "@/components/icons/home";
import Payment from "@/components/icons/payment";
import Settings from "@/components/icons/settings";
import Workflows from "@/components/icons/workflows";

export const clients = [...new Array(10)].map((client, index) => ({
  href: `/${index + 1}.png`,
}));

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/p2.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/p3.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/p4.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/p5.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/p6.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/p2.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/p3.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/p4.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/p5.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/p6.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/p2.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/p3.png",
  },
];

export const menuOptions = [
  {
    id: 1,
    name: "Dashboard",
    image: "/sidebarIcons/dashboard.png",
    activeImage: "/sidebarIcons/dashboard_active.png",
    href: "/dashboard",
  },
  {
    id: 2,
    name: "Workflows",
    image: "/sidebarIcons/workflow.png",
    activeImage: "/sidebarIcons/workflow_active.png",
    href: "/workflows",
  },
  {
    id: 3,
    name: "Settings",
    image: "/sidebarIcons/setting.png",
    activeImage: "/sidebarIcons/setting_active.png",
    href: "/settings",
  },
  {
    id: 4,
    name: "Connections",
    image: "/sidebarIcons/connection.png",
    activeImage: "/sidebarIcons/connection_active.png",
    href: "/connections",
  },
  {
    id: 5,
    name: "Billing",
    image: "/sidebarIcons/billing.png",
    activeImage: "/sidebarIcons/billing_active.png",
    href: "/billing",
  },
  {
    id: 6,
    name: "Templates",
    image: "/sidebarIcons/template.png",
    activeImage: "/sidebarIcons/template_active.png",
    href: "/templates",
  },
  {
    id: 7,
    name: "Logs",
    image: "/sidebarIcons/logs.png",
    activeImage: "/sidebarIcons/logs_active.png",
    href: "/logs",
  },
];
