import { AppState } from './app.state'
import { Fragment, useRef, ChangeEvent } from 'react'
import { Button } from '@material-ui/core'
import { ffmpeg, transformVideo } from './ffmpeg'

export const SelectVideosBtn = () => {
  const handleInput = async (e: ChangeEvent<HTMLInputElement>) => {
    let a = e.currentTarget.files[0]
    let u = await transformVideo(a)
    console.log(u)
  }
  return (
    <Fragment>
      <Button
        variant="outlined"
        color="inherit"
        component="label"
        htmlFor="select-videos"
      >
        选择视频文件
      </Button>
      <input
        id="select-videos"
        style={{ display: 'none' }}
        type="file"
        accept="video/*"
        multiple
        onInput={handleInput}
      />
    </Fragment>
  )
}
