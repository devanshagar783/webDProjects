import React from 'react'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import { ColorContextProvider } from './context/color-context'


const ContextApi = () => {
  return (
    <ColorContextProvider>
      <div>
        <ComponentA />
        <br />
        <br />
        <br />
        <ComponentB />
      </div>
    </ColorContextProvider>
  )
}

export default ContextApi
