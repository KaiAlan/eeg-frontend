
export type NavConfigType = {
    mainNav: {
        href: string;
        title: string;
    }[]
  }

export const NavConfig: NavConfigType = {
    mainNav: [
      {
        href: "/shop",
        title: "shop"
      },
      {
        href: "/discover",
        title: "discover"
      },
    ],
}