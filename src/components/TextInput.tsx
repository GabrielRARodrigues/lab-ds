import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex h-12 gap-3 items-center py-4 px-3 rounded w-full bg-gray-800 focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>
}

TextInputIcon.displayName = 'TextInput.icon'

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 bg-gray-800 outline-none  text-gray-100 text-xs placeholder:text-gray-400 "
      {...props}
    />
  )
}
TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  input: TextInputInput,
  icon: TextInputIcon
}
