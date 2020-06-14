import { useState } from 'react'
import { createContainer } from 'unstated-next'

interface Video {
  name: string
}

const useAppState = () => {
  return useState({
    videos: [] as Video[],
  })
}

export const AppState = createContainer(useAppState)
