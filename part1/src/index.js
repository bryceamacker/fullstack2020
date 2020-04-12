import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => (
  <div>Hello {props.name}, age {props.age}</div>
)

const Footer = () => (
  <div>test</div>
)
const App = () => {  
  const a = 10
  const b = 20
  
  return (
    <> 
      <Hello name = "Bryce" age = {21} />
      <Hello />
      <Hello />
      <Hello />
      <p> 
        {a} plus {b} is {a + b}
      </p>
      <Footer />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
