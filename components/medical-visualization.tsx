"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Activity, Pill } from "lucide-react"

export function MedicalVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [metrics, setMetrics] = useState({
    trials: 52,
    funding: 68,
    success: 45,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth * 2
    canvas.height = canvas.offsetHeight * 2
    ctx.scale(2, 2)

    const dataPoints1: number[] = []
    const dataPoints2: number[] = []
    const dataPoints3: number[] = []
    const maxPoints = 120
    let animationFrame: number
    let time = 0

    for (let i = 0; i < maxPoints; i++) {
      dataPoints1.push(52 + Math.sin(i * 0.05) * 8)
      dataPoints2.push(68 + Math.cos(i * 0.04) * 6)
      dataPoints3.push(45 + Math.sin(i * 0.03) * 10)
    }

    const drawChart = () => {
      const width = canvas.width / 2
      const height = canvas.height / 2

      // Clear canvas
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(0, 0, width, height)

      // Draw subtle grid
      ctx.strokeStyle = "#f1f5f9"
      ctx.lineWidth = 0.5

      // Horizontal grid lines
      for (let i = 0; i <= 5; i++) {
        const y = (height / 5) * i
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Vertical grid lines
      for (let i = 0; i <= 12; i++) {
        const x = (width / 12) * i
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      const drawLine = (data: number[], color: string) => {
        ctx.strokeStyle = color
        ctx.lineWidth = 1.2
        ctx.lineCap = "round"
        ctx.lineJoin = "round"
        ctx.beginPath()

        data.forEach((value, index) => {
          const x = (width / maxPoints) * index
          const y = height - (value / 100) * height

          if (index === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        })

        ctx.stroke()
      }

      drawLine(dataPoints3, "#26C8B8") // Cyan - changed from teal
      drawLine(dataPoints2, "#094068") // Tidal Steel - changed from green
      drawLine(dataPoints1, "#26C8B8") // Cyan - changed from purple

      time += 0.008
      dataPoints1.shift()
      dataPoints2.shift()
      dataPoints3.shift()

      dataPoints1.push(52 + Math.sin(time) * 8 + Math.random() * 1.5)
      dataPoints2.push(68 + Math.cos(time * 0.9) * 6 + Math.random() * 1.2)
      dataPoints3.push(45 + Math.sin(time * 0.7) * 10 + Math.random() * 1.8)

      if (Math.floor(time * 100) % 10 === 0) {
        setMetrics({
          trials: Math.floor(52 + Math.sin(time) * 8),
          funding: Math.floor(68 + Math.cos(time * 0.9) * 6),
          success: Math.floor(45 + Math.sin(time * 0.7) * 10),
        })
      }

      animationFrame = requestAnimationFrame(drawChart)
    }

    drawChart()

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      <Card className="absolute top-0 right-0 w-[85%] h-[420px] bg-[#094068]/50 backdrop-blur-xl border-2 border-[#26C8B8]/30 shadow-2xl shadow-cyan-500/20 p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">Live Platform Metrics</h3>
              <p className="text-xs text-[#EEEEEE] mt-0.5">Real-time blockchain & research data</p>
            </div>
            <div className="flex items-center gap-2 bg-[#26C8B8]/20 px-3 py-1.5 rounded-full border border-[#26C8B8]">
              <div className="w-2 h-0.5 bg-[#26C8B8] rounded-full animate-pulse" />
              <span className="text-xs text-[#26C8B8] font-semibold">Live</span>
            </div>
          </div>

          <div className="relative h-72 bg-[#0a0e1a] rounded-xl border-2 border-[#094068] overflow-hidden shadow-inner">
            <canvas ref={canvasRef} className="w-full h-full" />

            <div className="absolute top-3 right-3 bg-[#094068]/95 backdrop-blur-sm rounded-lg border-2 border-[#26C8B8]/30 px-3 py-2 space-y-1.5 shadow-lg">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-0.5 bg-[#26C8B8] rounded-full" />
                <span className="text-white font-semibold">Research Activity</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-0.5 bg-[#094068] rounded-full" />
                <span className="text-white font-semibold">Funding Success</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-0.5 bg-[#26C8B8] rounded-full" />
                <span className="text-white font-semibold">Network Health</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="absolute top-20 left-0 w-20 h-20 bg-gradient-to-br from-[#26C8B8] to-[#094068] rounded-3xl shadow-2xl flex items-center justify-center animate-float border-[3px] border-white">
        <Pill className="w-10 h-10 text-white drop-shadow-2xl" strokeWidth={2.5} />
      </div>

      <div
        className="absolute bottom-32 left-12 w-20 h-20 bg-gradient-to-br from-[#26C8B8] to-[#094068] rounded-3xl shadow-2xl flex items-center justify-center animate-float border-[3px] border-white"
        style={{ animationDelay: "1s" }}
      >
        <Activity className="w-10 h-10 text-white drop-shadow-2xl" strokeWidth={2.5} />
      </div>
    </div>
  )
}
