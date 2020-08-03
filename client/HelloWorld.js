import React from 'react'
import { hot } from 'react-hot-loader'

const HelloWorld = () => {
    return (
        <div>
          <h1>Hello World!</h1>
          <button>KhaDang</button>
        </div>
      )
}

export default hot(module)(HelloWorld)
