import faker2 from "faker";
import { faker } from "@faker-js/faker";

import { v4 as uuid } from "uuid";
export const data = [...Array(50)].map((item) => ({
  id: uuid(),
  name: faker2.name.findName(),
  email: faker2.internet.email(),
  location: faker2.random.arrayElement([
    "Singapore",
    "United Kingdom",
    "Germany",
    "India",
    "South Korea",
  ]),
  image: faker.image.avatar(),
  tech: faker2.random.arrayElement([
    "FrontEnd",
    "Backend",
    "Management",
    "Founder",
    "H.R.",
  ]),
}));
