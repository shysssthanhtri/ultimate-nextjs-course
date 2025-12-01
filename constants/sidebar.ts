import { ROUTES } from "@/constants/routes";

interface SidebarLink {
  label: string;
  href: string;
  imageUrl: string;
}

export const sidebarLinks: SidebarLink[] = [
  {
    imageUrl: "/icons/home.svg",
    href: ROUTES.HOME,
    label: "Home",
  },
  {
    imageUrl: "/icons/users.svg",
    href: ROUTES.COMMUNITY,
    label: "Community",
  },
  {
    imageUrl: "/icons/star.svg",
    href: ROUTES.COLLECTIONS,
    label: "Collections",
  },
  {
    imageUrl: "/icons/suitcase.svg",
    href: ROUTES.FIND_JOBS,
    label: "Find Jobs",
  },
  {
    imageUrl: "/icons/tag.svg",
    href: "/tags",
    label: "Tags",
  },
  {
    imageUrl: "/icons/user.svg",
    href: "/profile",
    label: "Profile",
  },
  {
    imageUrl: "/icons/question.svg",
    href: ROUTES.ASK_A_QUESTION,
    label: "Ask a question",
  },
];
