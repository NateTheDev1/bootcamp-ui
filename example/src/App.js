import React from 'react'

import { ExampleComponent, Button } from 'bootcamp-ui'
import 'bootcamp-ui/dist/index.css'

const App = () => {
  return (
    <div style={{ margin: '0 auto', maxWidth: '1440px', textAlign: 'center' }}>
      <Button onClick={() => console.log('clicked')}>Hello</Button>
    </div>
  )
}

export default App
