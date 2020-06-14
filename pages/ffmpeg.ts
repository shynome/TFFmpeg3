import { createFFmpeg } from '@ffmpeg/ffmpeg'

export const ffmpeg = createFFmpeg({
  corePath: '/ffmpeg-core/ffmpeg-core.js',
  log: true,
})

export default ffmpeg

export const transformVideo = async (video: File) => {
  await ffmpeg.load()
  await ffmpeg.remove('b.mp4')
  await ffmpeg.write('a.mp4', video)
  await ffmpeg.transcode('a.mp4', 'b.mp4')
  const data = ffmpeg.read('b.mp4')
  await ffmpeg.remove('a.mp4') // clear
  return URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }))
}
