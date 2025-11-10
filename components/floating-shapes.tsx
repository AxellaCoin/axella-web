"use client"

export function FloatingShapes() {
  return (
    <div className="relative w-full h-full">
      {/* Cyan Circle */}
      <div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#26C8B8]/30 to-[#26C8B8]/10 blur-2xl animate-float"
        style={{ animationDelay: "0s" }}
      />

      {/* Teal Circle */}
      <div
        className="absolute top-40 right-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#094068]/30 to-[#094068]/10 blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      {/* Cyan Circle 2 */}
      <div
        className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full bg-gradient-to-br from-[#26C8B8]/30 to-[#26C8B8]/10 blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Geometric Shapes */}
      <div
        className="absolute top-1/4 right-1/4 w-32 h-32 border-4 border-[#26C8B8]/40 rounded-lg rotate-12 animate-float"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-24 h-24 border-4 border-[#26C8B8]/40 rounded-full animate-float"
        style={{ animationDelay: "1.5s" }}
      />
    </div>
  )
}
