"use client"

import { Crisp } from "crisp-sdk-web"
import { useEffect } from "react"

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8ec77f1f-973c-495a-b3c9-77b4097ba25f")
  }, [])

  return null
}
