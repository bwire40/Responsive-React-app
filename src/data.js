/* eslint-disable react/jsx-no-undef */
import { SiOpenaigym } from "react-icons/si";
export const Links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Plans", path: "/plans" },
  { name: "Trainers", path: "/trainers" },
  { name: "Contacts", path: "/contacts" },
];

export const programs = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Program 1",
    info: "This is info",
    path: "/programs/111",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Program 2",
    info: "This is info",
    path: "/programs/112",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Program 3",
    info: "This is info",
    path: "/programs/113",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Program 4",
    info: "This is info",
    path: "/programs/114",
  },
];

export const values = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Values One",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Values two",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Values three",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Values four",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "How Often should i excercise?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel quam nec justo vehicula posuere vitae ut est",
  },
  {
    id: 2,
    question: "What time is best for workout?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel quam nec justo vehicula posuere vitae ut est. Sed sed nunc id ligula tempor lobortis at sed neque",
  },
  {
    id: 3,
    question: "How long should my workout be?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel quam nec justo vehicula posuere vitae ut est",
  },
  {
    id: 4,
    question: "What time is best for rest?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel quam nec justo vehicula posuere vitae ut est",
  },
  {
    id: 5,
    question: "Cardio or both?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel quam nec justo vehicula posuere vitae ut est",
  },
  {
    id: 6,
    question: "Should i lift weights for strength training?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel quam nec justo vehicula posuere vitae ut est",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "DIana Ayi",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel quam nec justo vehicula posuere vitae ut est",
    job: "Student",
    avatar: require("./images/avatar4.png"),
  },
  {
    id: 2,
    name: "John Ayi",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel quam nec justo vehicula posuere vitae ut est",
    job: "Student",
    avatar: require("./images/avatar2.png"),
  },
  {
    id: 3,
    name: "Mercy Alido",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel quam nec justo vehicula posuere vitae ut est",
    job: "Student",
    avatar: require("./images/avatar5.png"),
  },
  {
    id: 4,
    name: "Kevin hones",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel quam nec justo vehicula posuere vitae ut est",
    job: "Student",
    avatar: require("./images/avatar2.png"),
  },
  {
    id: 5,
    name: "Bianca Hellen",
    quote:
      "Yooh adipiscing elit. Duis vel quam nec justo vehicula posuere vitae ut est",
    job: "Student",
    avatar: require("./images/avatar5.png"),
  },
];

export const plans = [
  {
    id: 1,
    name: "Silver Package",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: 29.99,
    feactures: [
      { feature: "First", available: true },
      { feature: "Second", available: true },
      { feature: "Third", available: false },
      { feature: "Fourth", available: true },
      { feature: "Fifth", available: false },
      { feature: "Sixth", available: true },
      { feature: "Seventh", available: true },
      { feature: "Eighth", available: true },
    ],
  },
  {
    id: 2,
    name: "Bronze Package",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: 39.99,
    feactures: [
      { feature: "First", available: true },
      { feature: "Second", available: true },
      { feature: "Third", available: false },
      { feature: "Fourth", available: true },
      { feature: "Fifth", available: false },
      { feature: "Sixth", available: true },
      { feature: "Seventh", available: true },
      { feature: "Eighth", available: true },
    ],
  },
  {
    id: 3,
    name: "Gold Package",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: 49.99,
    feactures: [
      { feature: "First", available: true },
      { feature: "Second", available: true },
      { feature: "Third", available: false },
      { feature: "Fourth", available: true },
      { feature: "Fifth", available: false },
      { feature: "Sixth", available: true },
      { feature: "Seventh", available: true },
      { feature: "Eighth", available: true },
    ],
  },
];
