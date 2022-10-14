import { addParameters, Meta, StoryObj } from '@storybook/react'
import { SignIn } from './SignIn'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import {rest} from 'msw' 
import { expect } from '@storybook/jest'

export default {
  title: 'Pages/SignIn',
  component: SignIn,
  args: {
    children: 'Creat account',
    size: 'md'
  },
  argTypes: {},
  parameters:{
    msw:{
      handlers: [
        rest.post('/sessions', (req, res, ctx)=>{
          return res(ctx.json({
            message:'Login realizado!'
          }))
        })
      ],
    },
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(
      canvas.getByPlaceholderText('Digite seu e-mail'),
      'gabriel.rocha.andrade.rodrigues@gmail.com'
    )
    userEvent.type(canvas.getByPlaceholderText('*******'), '1234578')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      return expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
    })
  }
}
