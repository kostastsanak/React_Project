import './styles.css'
import IMAGE from './movie.jpg'
import { Counter } from './Counter'

export const App = () => {
  const name = 'TSANAK'
  return (
    <>
      <h1>
        React TypeScript Webpack Starter Template - {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <img src={IMAGE} alt="Movie Logo" width="300" height="200" />
      <Counter />
    </>
  )
}
