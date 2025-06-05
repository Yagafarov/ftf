import { Button, Flex ,Text} from '@radix-ui/themes'
import React from 'react'

const App = () => {
  return (
    <div>
      <Flex direction="column" gap="2">
			<Text>Hello from Radix Themes :)</Text>
			<Button>Let's go</Button>
		</Flex>
    </div>
  )
}

export default App