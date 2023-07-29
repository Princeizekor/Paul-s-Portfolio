import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "I'm Paul Izekor",
          'A Frontend developer',
          'Software Engineer',
          "I'm The Future"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        cursor: ''
      }}
    />
  )
}

export default Type
