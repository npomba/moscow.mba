import { useEffect, useState } from 'react'

const getWindowWidth = () => {
  if (typeof window !== 'undefined') return window.innerWidth
}

const useWindowWidth = () => {
  const [size, setSize] = useState(getWindowWidth())
  useEffect(() => {
    let resize = () => setSize(getWindowWidth())
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])
  return size
}

export default useWindowWidth
