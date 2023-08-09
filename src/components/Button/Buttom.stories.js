import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["line", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variant: "line",
    className: {},
    buttonClassName: {},
    text: "Button",
  },
};
