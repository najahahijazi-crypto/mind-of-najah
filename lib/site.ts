export const siteConfig = {
  name: "Mind of Najah",
  description:
    "A founder-led education consultancy helping K–12 leaders create clear, engaging, and purposeful learning experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mindofnajah.com",
  navigation: [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
  ],
};
