import type { Meta, StoryObj } from '@storybook/react';
import React from "react"

import Star from './Star';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Stars/Star',
    component: Star,
    tags: ['autodocs'],
    argTypes: {
        cx: { control: 'number' },
        cy: { control: 'number' },
        r: { control: 'number' },
        fill: {
            control: "select",
            options: ["yellow", "blue", "green", "red", "white"]
        }
    },
} satisfies Meta<typeof Star>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    render: () => <svg width="500px" height="500px" viewBox="-1 -1 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        <Star cx={5} cy={5} r={5} fill="yellow" /></svg>,
};

export const Secondary: Story = {
    render: ({ cx, cy, r, fill }) => <svg width="500px" height="500px" viewBox="-1 -1 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        <Star cx={cx} cy={cy} r={r} fill={fill} /></svg>,
}