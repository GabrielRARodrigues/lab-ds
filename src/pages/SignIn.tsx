import { Checkbox } from '@radix-ui/react-checkbox'
import { Envelope, Lock } from 'phosphor-react'
import axios from 'axios'
import { Button } from '../components/Button'
import { Heading } from '../components/Heading'
import { TextInput } from '../components/TextInput'
import { Logo } from '../Logo'
import { Text } from '../components/Text'
import { FormEvent, useState } from 'react'

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)
 async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    axios.post('/sessions', {
      email: 'gabriel.rocha.andrade.rodrigues@gmail.com',
      password: '1234578'
    })

    setIsUserSignedIn(true)
  }

  return (
    <div className="w-screen bg-gray-900 h-screen flex items-center justify-center flex-col text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>
      <form
        onSubmit={handleSignIn}
        className="flex gap-4 flex-col w-full max-w-sm items-stretch mt-10"
      >
        {isUserSignedIn && <Text>Login realizado!</Text>}
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.icon>
              <Envelope />
            </TextInput.icon>
            <TextInput.input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.icon>
              <Lock />
            </TextInput.icon>
            <TextInput.input
              id="password"
              type="password"
              placeholder="*******"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>
        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>

        <footer className="flex flex-col items-center gap-4 mt-8">
          <Text asChild size="sm">
            <a
              href="#"
              className="text-gray-400 underline hover:text-gray-200 "
            >
              Esqueceu sua senha
            </a>
          </Text>
          <Text asChild size="sm">
            <a
              href="#"
              className="text-gray-400 underline hover:text-gray-200 "
            >
              Não possui conta? Crie uma agora
            </a>
          </Text>
        </footer>
      </form>
    </div>
  )
}
