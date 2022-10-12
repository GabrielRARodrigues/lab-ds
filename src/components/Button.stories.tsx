import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Creat account',
    size: 'md'
  },
  argTypes: {}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}
