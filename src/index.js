import React from 'react'
import Button from './components/Button/Button'
import './styles.module.css'

const ExampleComponent = ({ text }) => {
  const styles = {
    title: {
      color: 'blue'
    }
  }
  return <div style={styles.title}>Example Component: {text}</div>
}

export { ExampleComponent, Button }
