// src/app/not-found.jsx
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    // Redirect vers la home par défaut (ici /en)
    router.replace("/en")
  }, [router])

  return null
}