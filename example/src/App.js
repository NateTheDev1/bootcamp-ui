import React from 'react'

import { Button, FlexContainer, TextInput } from 'bootcamp-ui'

const App = () => {
  return (
    <FlexContainer
      justify='space-evenly'
      direction='column'
      style={{ height: '50vh' }}
    >
      <Button onClick={() => console.log('clicked')}>EXIT</Button>

      <TextInput
        onChange={() => console.log('inputing')}
        placeholder='Username'
      />
    </FlexContainer>
  )
}

export default App
