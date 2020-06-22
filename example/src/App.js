import React from 'react'

import { Button, FlexContainer, TextInput, FlexItem } from 'bootcamp-ui'

const App = () => {
  return (
    <FlexContainer
      justify='space-evenly'
      direction='column'
      style={{ height: '50vh' }}
    >
      <Button onClick={() => console.log('clicked')}>EXIT</Button>

      <FlexItem style={{ border: '1px solid red' }}>
        <TextInput
          onChange={() => console.log('inputing')}
          placeholder='Username'
        />
      </FlexItem>
    </FlexContainer>
  )
}

export default App
