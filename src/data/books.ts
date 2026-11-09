import coverGiraffe from "../assets/book-giraffe.jpg";
import coverCaleb from "../assets/book-caleb.jpg";
import coverGenie from "../assets/book-genie.jpg";

/**
 * ─────────────────────────────────────────────────────────────
 *  BOOK CONFIGURATION: Christian Kueng
 * ─────────────────────────────────────────────────────────────
 *  Purchase links: set `url` to a retailer page.
 *  Leave `url` as "" to show the "Purchase link coming soon" state.
 * ─────────────────────────────────────────────────────────────
 */

export type PurchaseLink = {
  retailer: string;
  url: string; // "" = not configured yet
};

export type Book = {
  id: string;
  title: string;
  tagline: string;
  description: string; // short card copy
  longDescription: string[]; // paragraphs for detail view
  format: string; // e.g. "Picture Book"
  audience: string;
  genre: string;
  themes: string[];
  cover: string;
  accent: string;
  illustrator?: string;
  publisher?: string;
  published?: string;
  details?: string[];
  insideTitle: string;
  inside: string[]; // story highlights shown in "Inside the Story"
  awards?: string[];
  purchaseLinks: PurchaseLink[];
};

/** Christian's Amazon author page (lists all his titles). */
const AMAZON_AUTHOR = "https://www.amazon.com/Christian-Roulland-Kueng/e/B00BI3VQP6";

export const books: Book[] = [
  {
    id: "can-we-get-a-giraffe",
    title: "Can We Get a Giraffe?",
    tagline: "A pet-negotiation story with a very tall twist.",
    description:
      "A little girl longs to have a pet, and her choice is an unusual one indeed: a GIRAFFE! Dad is surprised by this selection…",
    longDescription: [
      "A little girl longs to have a pet and her choice is an unusual one, indeed: a GIRAFFE. Dad is surprised by this selection. He tells his daughter how impractical it is considering where they live and the room they have for her far-fetched idea. She then suggests other options…",
      "But as she continues to negotiate for a giraffe, Dad reminds her that giraffes are endangered animals, and he has another idea for his daughter. What could it be?",
    ],
    format: "Picture Book",
    audience: "Young readers",
    genre: "Picture Book · Animals",
    themes: ["Pets", "Endangered Animals", "Family"],
    cover: coverGiraffe,
    accent: "#9BD8F4",
    illustrator: "Nana Melkadze",
    insideTitle: "She has a few other ideas…",
    inside: ["What about a penguin?", "How do you feel about a sloth?", "Why not a sea turtle?"],
    purchaseLinks: [{ retailer: "Amazon", url: AMAZON_AUTHOR }],
  },
  {
    id: "calebs-adventures-with-granddad",
    title: "Caleb's Adventures with Granddad",
    tagline: "No one is ever too old to go on another adventure!",
    description:
      "Caleb and Granddad are best friends and love to go on big adventures together! All they need is a backyard and their imaginations.",
    longDescription: [
      "Caleb and Granddad are best friends and love to go on big adventures together! From deep-sea fishing to slaying dragons, all they need is a backyard and their imaginations. But when Caleb starts to grow up and spend more time with his friends, Granddad wonders if they'll ever have another adventure.",
      "Filled with vivid illustrations and a heartwarming story for readers of all ages, Caleb's Adventures with Granddad reminds us that no one is ever too old to go on another adventure!",
    ],
    format: "Picture Book",
    audience: "Readers of all ages",
    genre: "Picture Book · Family",
    themes: ["Imagination", "Grandparents", "Growing Up"],
    cover: coverCaleb,
    accent: "#A8DDBB",
    illustrator: "Nana Melkadze",
    publisher: "Atlantic Publishing Group",
    published: "2020",
    details: ["ISBN 978-1-62023-666-6"],
    insideTitle: "Backyard adventures",
    inside: ["Deep-sea fishing 🎣", "Slaying dragons 🐉", "All from the backyard 🏰"],
    awards: [
      "Pinnacle Book Achievement Award: Children's Adventure",
      "The Wishing Shelf Book Awards: Silver Medal",
      "American Writing Awards: Picture Book Winner",
      "Clara J. Johns Literary Award: Best Picture Book",
    ],
    purchaseLinks: [{ retailer: "Amazon", url: AMAZON_AUTHOR }],
  },
  {
    id: "three-genie-brothers",
    title: "Three Genie Brothers",
    tagline: "Mischief, magic, and an amethyst bottle.",
    description:
      "JD, Morgan, and Blake are ten-year-old junior genie triplets who have spent all their lives inside an amethyst bottle… until they meet Brianna.",
    longDescription: [
      "JD, Morgan, and Blake are ten-year-old junior genie triplets. They've spent all their lives inside an amethyst bottle with their mother and father, Aristede and Cassidy. They become suddenly interested in the outside world when they view a young girl through the window of their genie bottle; they soon learn her name is Brianna.",
      "Brianna has come to visit her grandparents, the owners of the genie jar. She feels drawn to the beautiful bottle, and when she pops the cork, she becomes the master of the genies inside. The triplets are mischievous, though, and they plan to trick Brianna into using all her wishes right away. Their mischief goes too far when Brianna finds herself trapped inside their bottle.",
    ],
    format: "Juvenile Fantasy Novel",
    audience: "Independent young readers",
    genre: "Fantasy Fiction",
    themes: ["Magic", "Mischief", "Friendship"],
    cover: coverGenie,
    accent: "#C9B8F5",
    publisher: "iUniverse",
    published: "2012",
    details: ["270 pages", "ISBN 978-1-4759-6185-0"],
    insideTitle: "Meet the characters",
    inside: ["JD, Morgan & Blake: the triplets", "Aristede & Cassidy: their parents", "Brianna: their new master"],
    purchaseLinks: [{ retailer: "Amazon", url: AMAZON_AUTHOR }],
  },
];

/** General site settings. */
export const site = {
  authorName: "Christian Kueng",
  email: "hello@your-domain.com", // placeholder: replace with Chris's contact email
  amazon: AMAZON_AUTHOR,
  socials: [
    { label: "Amazon Author Page", url: AMAZON_AUTHOR },
    { label: "Goodreads", url: "https://www.goodreads.com/author/show/6875159.Christian_Roulland_Kueng" },
    { label: "Instagram", url: "" },
  ],
};
