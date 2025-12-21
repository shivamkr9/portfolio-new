"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { cancelFrame, frame } from "framer-motion"
import { ReactLenis } from "lenis/react"
import type { LenisRef } from "lenis/react"

type Props = {
  children: ReactNode
}

export function Providers({ children }: Props) {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])
  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  )
}
