import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '.';


const meta: Meta<typeof Header> = {
  title: 'common components/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};