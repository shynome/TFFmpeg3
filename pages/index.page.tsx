import {
  Container,
  LinearProgress,
  AppBar,
  Toolbar,
  Button,
  TextField,
  Typography,
} from '@material-ui/core'
import { AppState } from './app.state'
import dynamic from 'next/dynamic'
import { SelectVideosBtn } from './SelectVideosBtn'

const App = dynamic(import('./app'), {
  loading: () => <LinearProgress />,
  ssr: false,
})

export default function IndexPage() {
  return (
    <AppState.Provider>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            TFFmpeg
          </Typography>
          <SelectVideosBtn />
        </Toolbar>
      </AppBar>
      <Container>
        <App />
      </Container>
    </AppState.Provider>
  )
}
