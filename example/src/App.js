import React from 'react'

import { Button, FlexContainer } from 'bootcamp-ui'

const App = () => {
  return (
    <FlexContainer
      style={{
        border: '1px solid red'
      }}
    >
      <Button onClick={() => console.log('clicked')}>EXIT</Button>
      <Button onClick={() => console.log('clicked')}>EXIT</Button>
    </FlexContainer>
  )
}

export default App
