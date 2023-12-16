import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "I`m Paul Izekor",
          'A Frontend Developer',
          'Software Engineer',
          // "I'm The Future <img src='/img/verified.png' />"
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
