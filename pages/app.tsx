import { createFFmpeg } from '@ffmpeg/ffmpeg'

const f = createFFmpeg({
  corePath: '/ffmpeg-core/ffmpeg-core.js',
  log: true,
})

export const App = () => {
  console.log(f)
  return <button onClick={()=>f.load()}>hello eeeee</button>
}
export default App
