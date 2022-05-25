import { expect, jest } from "@storybook/jest";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Test } from "./Test";
import * as location from "./location";

export default {
  component: Test,
} as ComponentMeta<typeof Test>;

export const TestStory: ComponentStoryObj<typeof Test> = {
  play: async ({ canvasElement }) => {
    jest.spyOn(location, "redirect").mockReturnValue();

    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button");
    userEvent.click(button);

    expect(true).toBe(true);
  },
};
