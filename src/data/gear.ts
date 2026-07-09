export interface GearEntry {
  name: string;
  link: string;
  image: string;
}

export interface GearCategory {
  category: string;
  items: GearEntry[];
}

export const gearCategories: GearCategory[] = [
  {
    category: "Main Gear",
    items: [
      {
        name: "S21 Fe 5G",
        link: "https://www.samsung.com/in/support/model/SM-G990ELVIINU/",
        image: "https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/247558_0_rt4red.png",
      },
      {
        name: "Galaxy Watch 7",
        link: "https://www.amazon.in/Samsung-44mm-Green-BT-LTE/dp/B0DKFT7RCN",
        image: "https://m.media-amazon.com/images/I/71QUv8DcRBL._SL1500_.jpg",
      },
      {
        name: "Galaxy Buds 3 Pro",
        link: "https://www.amazon.in/Samsung-Adaptive-Real-Time-Interpreter-Battery/dp/B0D7M4G3NP/",
        image: "https://m.media-amazon.com/images/I/71ke2BEdIhL._SL1500_.jpg",
      },
      {
        name: "Sony WH-CH720N",
        link: "https://www.amazon.in/Sony-Cancellation-Headphones-Multi-Point-Connection/dp/B0BS1QCFHX/",
        image: "https://m.media-amazon.com/images/I/51rpbVmi9XL._SL1200_.jpg",
      },
    ],
  },
  {
    category: "PC Gear",
    items: [
      {
        name: "Lenovo Legion Slim 7i",
        link: "https://www.amazon.in/Lenovo-Legion-Gaming-Laptop-Model/dp/B0CGHS2TXT",
        image: "https://m.media-amazon.com/images/I/61P1thL0tJL._SL1154_.jpg",
      },
      {
        name: "Intel® Core™ i9-13900H",
        link: "https://www.amazon.in/Intel%C2%AE-CoreTM-i9-13900KS-Processor-Cache/dp/B0BVKX19C3/",
        image: "https://m.media-amazon.com/images/I/41ifOU-bLfL._SL1080_.jpg",
      },
      {
        name: "NVIDIA GeForce RTX 4060",
        link: "https://www.amazon.in/GIGABYTE-NVIDIA-GeForce-WINDFORCE-Graphics/dp/B0C8ZQTRD7/",
        image: "https://m.media-amazon.com/images/I/71qcNRB-FeL._SL1500_.jpg",
      },
      {
        name: "Samsung 870 QVO 2TB",
        link: "https://www.amazon.in/Samsung-Internes-Solid-State-MZ-77Q2T0BW/",
        image: "https://m.media-amazon.com/images/I/91PA5sP5wNL._SL1500_.jpg",
      },
    ],
  },
  {
    category: "Desk Setup",
    items: [
      {
        name: "Samsung 22-inch Monitor",
        link: "https://www.amazon.in/Samsung-Essential-Monitor-Resolution-LS22D300GAWXXL/dp/B0CG675TD4/",
        image: "https://m.media-amazon.com/images/I/717t70C09VL._SL1500_.jpg",
      },
      {
        name: "Height Adjustable Monitor Stand",
        link: "https://www.amazon.in/dp/B09KPVNWD4",
        image: "https://m.media-amazon.com/images/I/61sYE75F3QL._SL1254_.jpg",
      },
      {
        name: "MageGee Portable 60% Mechanical Gaming Keyboard",
        link: "https://www.amazon.in/dp/B092CHWH1D",
        image: "https://m.media-amazon.com/images/I/71VIc-MHaNL._SL1500_.jpg",
      },
      {
        name: "Portronics Toad Mouse",
        link: "https://www.amazon.in/Portronics-Wireless-Bluetooth-Connectivity-Rechargeable/dp/B0BG8LZNYL/",
        image: "https://m.media-amazon.com/images/I/51hZtBRUFBL._SL1500_.jpg",
      },
    ],
  },
];
