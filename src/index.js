import React from 'react'

export const ExampleComponent = ({ text }) => {
  const styles = {
    title: {
      color: 'blue'
    }
  }
  return <div style={styles.title}>Example Component: {text}</div>
}
