import { createFFmpeg } from '@ffmpeg/ffmpeg'

export const ffmpeg = createFFmpeg({
  corePath: '/ffmpeg-core/ffmpeg-core.js',
  // log: true,
  // progress: (p) => console.log(p),
})

export default ffmpeg

let files = []

export const transformVideo = async (video: File) => {
  await ffmpeg.load()
  await Promise.all(files.map((f) => ffmpeg.remove(f)))
  files = []
  await ffmpeg.write('a.mp4', video)
  files.push('a.mp4')
  await ffmpeg.transcode('a.mp4', 'b.mp4', '-threads 8')
  files.push('b.mp4')
  const data = ffmpeg.read('b.mp4')
  await ffmpeg.remove('a.mp4') // clear
  return URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }))
}
