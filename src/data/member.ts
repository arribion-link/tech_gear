import partiner_image_1 from "../assets/images/partiner-1.png"
import partiner_image_2 from "../assets/images/partiner-2.png";
import partiner_image_3 from "../assets/images/partiner-3.png";
import partiner_image_4 from "../assets/images/partiner-4.png";


type member = {
    id: number;
    logo: string;
    name: string;
}

const members: member[] = [
  {
    id: 1,
    logo: partiner_image_1,
    name: "Digitbit",
  },
  {
    id: 1,
    logo: partiner_image_2,
    name: "codnify",
  },
  {
    id: 1,
    logo: partiner_image_3,
    name: "nuvex",
  },
  {
    id: 1,
    logo: partiner_image_4,
    name: "TechGear",
  },
];

export default members