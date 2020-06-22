import React from 'react'

import { ExampleComponent, Button } from 'bootcamp-ui'

const App = () => {
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: '1440px',
        textAlign: 'center'
      }}
    >
      <Button onClick={() => console.log('clicked')}>Hello</Button>
      <button>Second</button>
    </div>
  )
}

export default App
