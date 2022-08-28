/* eslint-disable react/jsx-no-undef */
import { SiOpenaigym } from "react-icons/si";
const Trainer1 = require("./images/avatar1.png");
const Trainer2 = require("./images/avatar5.png");
const Trainer3 = require("./images/avatar3.png");
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
    question: "Where do i start with programming?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel quam nec justo vehicula posuere vitae ut est",
  },
  {
    id: 2,
    question: "Do i have to be a maths wizzard?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel quam nec justo vehicula posuere vitae ut est. Sed sed nunc id ligula tempor lobortis at sed neque",
  },
  {
    id: 3,
    question: "How long will it take to get my first job?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel quam nec justo vehicula posuere vitae ut est",
  },
  {
    id: 4,
    question: "What time is best for coding?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel quam nec justo vehicula posuere vitae ut est",
  },
  {
    id: 5,
    question: "front or backend?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel quam nec justo vehicula posuere vitae ut est",
  },
  {
    id: 6,
    question: "Which type of computer/laptop is recommended to start?",
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
    features: [
      { feature: "First", available: true },
      { feature: "Second", available: true },
      { feature: "Third", available: false },
      { feature: "Fourth", available: true },
      { feature: "Fifth", available: false },
      { feature: "Sixth", available: true },
      { feature: "Seventh", available: false },
      { feature: "Eighth", available: true },
    ],
  },
  {
    id: 2,
    name: "Bronze Package",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: 39.99,
    features: [
      { feature: "First", available: true },
      { feature: "Second", available: true },
      { feature: "Third", available: false },
      { feature: "Fourth", available: true },
      { feature: "Fifth", available: false },
      { feature: "Sixth", available: true },
      { feature: "Seventh", available: true },
      { feature: "Eighth", available: false },
    ],
  },
  {
    id: 3,
    name: "Gold Package",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: 49.99,
    features: [
      { feature: "First", available: true },
      { feature: "Second", available: true },
      { feature: "Third", available: false },
      { feature: "Fourth", available: true },
      { feature: "Fifth", available: false },
      { feature: "Sixth", available: true },
      { feature: "Seventh", available: false },
      { feature: "Eighth", available: true },
    ],
  },
];

export const trainers = [
  {
    id: 1,
    image: Trainer1,
    name: "John",
    job: "Front-End Developer",
    socials: [
      "https://instagram.com",
      "https://twitter.com",
      "https://facebook.com",
    ],
  },
  {
    id: 2,
    image: Trainer2,
    name: "Celine",
    job: "UI/XI Designer",
    socials: [
      "https://instagram.com",
      "https://twitter.com",
      "https://facebook.com",
    ],
  },
  {
    id: 3,
    image: Trainer3,
    name: "Kevin",
    job: "Back-End Developer",
    socials: [
      "https://instagram.com",
      "https://twitter.com",
      "https://facebook.com",
    ],
  },
];
