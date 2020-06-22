import React from 'react'

import { ExampleComponent, Button } from 'bootcamp-ui'

const App = () => {
  return (
    <div
      style={{
        margin: '0 auto',
        marginTop: '5%',
        maxWidth: '1440px',
        textAlign: 'center'
      }}
    >
      <Button onClick={() => console.log('clicked')}>EXIT</Button>
    </div>
  )
}

export default App
