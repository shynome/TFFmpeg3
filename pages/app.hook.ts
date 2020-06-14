import { AppState } from './app.state'
import App from 'next/app'

export const useApp = () => {
  const [state, setState] = AppState.useContainer()
  return {
    state,
    setState,
  }
}
