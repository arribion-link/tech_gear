import service_img_1 from "../assets/images/service-1.png"
import service_img_2 from "../assets/images/service-2.png";
import service_img_3 from "../assets/images/service-3.png";
import service_img_4 from "../assets/images/service-4.png";

type service = {
    id: number;
    image: string;
    name: string;
    description: string;
};

const services: service[] = [
  {
    id: 1,
    image: service_img_1,
    name: "Lifetime Garantee",
    description:
      "We stand by the quality of our products for life. If your mouse, keyboard, or accessory ever fails due to manufacturing defects, we’ll repair or replace it—no questions asked. It’s our way of saying: we’re in this for the long haul.",
  },
  {
    id: 1,
    image: service_img_2,
    name: "Good Price",
    description:
      "Premium tech doesn’t have to come with a premium price tag. We offer cutting-edge accessories at prices that make sense—without compromising on performance or durability.",
  },
  {
    id: 1,
    image: service_img_3,
    name: "Free software update",
    description:
      "Stay ahead of the curve with free firmware and driver updates for all our smart devices. Whether it’s enhanced customization, improved performance, or new features, your gear keeps getting better over time.",
  },
  {
    id: 1,
    image: service_img_4,
    name: "24/7 Support",
    description:
      "Tech troubles don’t follow a schedule—and neither do we. Our expert support team is available 24/7 to help you troubleshoot, configure, or simply get the most out of your gear. Chat, email, or call us anytime.",
  },
];

export default services;
