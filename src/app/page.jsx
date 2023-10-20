import Image from 'next/image'
import { Flex, Text, Button } from '@radix-ui/themes'

export default function Home() {
  return (
    <main>
      <h1 className="text-5xl">Hello World!</h1>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :&#41;</Text>
        <Button>Let&apos;s go</Button>
      </Flex>
    </main>
  )
}
