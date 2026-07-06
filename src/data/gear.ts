/**
 * Gear page data — mirrors your Amazon storefront lists.
 *
 * SYNCING WITH AMAZON:
 * Amazon does not provide a public API for influencer storefront / idea lists,
 * so this file is the source of truth. When you add or remove items (or a
 * collection) on your Amazon storefront, update this file to match.
 *
 * List URLs (for reference):
 * - Desk Setup:  https://www.amazon.com/shop/phillipche/list/2EL6EOCFIKQ6O
 * - Recording:   https://www.amazon.com/shop/phillipche/list/1Z7YDJROMUT40
 * - PC Gear:     https://www.amazon.com/shop/phillipche/list/2IJ800MZ94A7W
 *
 * To add an item: push a new entry with name, link, and image URL.
 */

export interface GearEntry {
  name: string;
  link: string;
  image: string;
}

export interface GearCategory {
  category: string;
  listUrl: string;
  items: GearEntry[];
}

export const gearCategories: GearCategory[] = [
  {
    category: "Desk Setup",
    listUrl: "https://www.amazon.com/shop/phillipche/list/2EL6EOCFIKQ6O",
    items: [
      {
        name: "LOFREE Flow Lite 84 Keys",
        link: "https://www.lofree.co/products/flow-lite84-mechanical-keyboard?ref=phillipche",
        image: "https://m.media-amazon.com/images/I/61z5Q8bkrkL._AC_SL1500_.jpg",
      },
      {
        name: "LOFREE Flow2 Low-Profile Mechanical Keyboard",
        link: "https://www.lofree.co/products/flow-2-84-low-profile-mechanical-keyboard?ref=phillipche&variant=47210573037787",
        image: "https://m.media-amazon.com/images/I/61YNZRCJnuL._AC_SL1500_.jpg",
      },
      {
        name: "EPOMAKER x Aula F65 65% Wireless",
        link: "https://amzn.to/4rJrGdi",
        image: "https://m.media-amazon.com/images/I/613gc0JYwpL._AC_SL1500_.jpg",
      },
      {
        name: "Razer Viper V3 Pro Wireless Gaming Mouse",
        link: "https://amzn.to/4bgYdBu",
        image: "https://m.media-amazon.com/images/I/619xpFKAXPL._AC_SL1500_.jpg",
      },
    ],
  },
  {
    category: "Recording Gear",
    listUrl: "https://www.amazon.com/shop/phillipche/list/1Z7YDJROMUT40",
    items: [
      {
        name: "DJI Osmo Pocket 3",
        link: "https://amzn.to/3ODz2QU",
        image: "https://m.media-amazon.com/images/I/61tukvVUMiL._AC_SL1500_.jpg",
      },
      {
        name: "ULANZI PM01 Magnetic Mount Stand",
        link: "https://amzn.to/4cl6dm4",
        image: "https://m.media-amazon.com/images/I/61OzCjisLHL._AC_SL1500_.jpg",
      },
    ],
  },
  {
    category: "PC Gear",
    listUrl: "https://www.amazon.com/shop/phillipche/list/2IJ800MZ94A7W",
    items: [
      {
        name: "Apple 2024 MacBook Pro M4 Pro 16-inch",
        link: "https://amzn.to/47eXoqk",
        image: "https://m.media-amazon.com/images/I/61hw7aZWYSL._AC_SL1500_.jpg",
      },
      {
        name: "AMD Ryzen 7 7800X3D",
        link: "https://amzn.to/3BvamUk",
        image: "https://m.media-amazon.com/images/I/51HqC0rU9HL._AC_SL1500_.jpg",
      },
      {
        name: "ASUS Dual GeForce RTX 4070 White OC",
        link: "https://amzn.to/4kYPMxT",
        image: "https://m.media-amazon.com/images/I/81aLFs6DwgL._AC_SX466_.jpg",
      },
      {
        name: "WD_BLACK SN850X 2TB NVMe SSD",
        link: "https://amzn.to/4qYYZrD",
        image: "https://m.media-amazon.com/images/I/61jQCrK6mFL._AC_SL1500_.jpg",
      },
    ],
  },
];
