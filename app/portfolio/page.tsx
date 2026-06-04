"use client"
import Image from "next/image"
import { useState } from "react"

type Project = {
  src: string
  title: string
  tool: string
  type: 'zoom' | 'link'
  url?: string
  imgWidth?: number
}

const projects: Project[] = [
  { src: '/spring.png', title: '金旋招新指定題目作品', tool: '創作工具：Procreate', type: 'zoom' },
  { src: '/space.png', title: '空間設計插畫', tool: '創作工具：Procreate', type: 'zoom', imgWidth: 600},
  { src: '/mag.png', title: '雜誌排版設計', tool: '創作工具：Procreate', type: 'zoom' },
  { src: '/cover.png', title: '畢業紀念冊封面投稿', tool: '創作工具：Procreate', type: 'zoom' },
  { src: '/j.png', title: '金旋寒假企劃主視覺', tool: '創作工具：Procreate Adobe Illustrator', type: 'zoom' },
  { src: '/test.png', title: '金旋寒假企劃心理測驗圖', tool: '創作工具：Procreate Adobe Illustrator', type: 'zoom' },
  { src: '/ddr.png', title: '東東蕊超市LOGO', tool: '創作工具：Adobe Illustrator', type: 'zoom' },
  { src: '/high.png', title: '高中園遊會宣傳視覺', tool: '創作工具：Canva', type: 'zoom' },
  { src: '/clothes.png', title: '高中班服設計', tool: '創作工具：Procreate', type: 'zoom' },
  { src: '/circus.png', title: '動態圖像期末作品', tool: '創作工具：After Effect', type: 'link', url: 'https://youtu.be/erVbI437_V8?si=3KAY4l6BOwWk8yA1' },
  { src: '/arcgis.png', title: '第十一屆StoryMaps校園競賽主視覺', tool: '創作工具：ArcGIS_StoryMaps', type: 'link', url: 'https://arcg.is/18Livr1' },
]

export default function Portfolio() {
  const [zoomedSrc, setZoomedSrc] = useState<string | null>(null)

  const handleClick = (project: Project) => {
    if (project.type === 'link' && project.url) {
      window.open(project.url, '_blank')
    } else {
      setZoomedSrc(project.src)
    }
  }

  return (
    <div style={{ width: '100%', height: '100vh', overflowY: 'scroll' }}>

      {/* 固定背景 */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100vh',
        backgroundImage: "url('/cir.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
      }} />

      {/* 內容 */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        padding: '40px 60px',
        minHeight: '100vh',
      }}>
        {projects.map((project, index) => {
          const isLeft = index % 2 === 0
          return (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: isLeft ? 'row' : 'row-reverse',
                alignItems: 'center',
                marginBottom: '60px',
                gap: '40px',
              }}
            >
              {/* 圖片 */}
              <div
                onClick={() => handleClick(project)}
                style={{
                  cursor: project.type === 'link' ? 'pointer' : 'zoom-in',
                  flexShrink: 0,
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  width={420}
                  height={300}
                  style={{ objectFit: 'contain', display: 'block' }}
                />
              </div>

              {/* 文字 */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                <svg width="500" height="60" overflow="visible">
                  <text
                    x={isLeft ? '0' : '500'}
                    y="45"
                    textAnchor={isLeft ? 'start' : 'end'}
                    fontSize="28"
                    fontWeight="700"
                    fill="#e8ce70"
                    stroke="#000"
                    strokeWidth="3"
                    paintOrder="stroke fill"
                    fontFamily="BIZ UDMincho, serif"
                    letterSpacing="2"
                  >
                    {project.title}
                  </text>
                </svg>
                <svg width="500" height="35" overflow="visible">
                  <text
                    x={isLeft ? '0' : '500'}
                    y="25"
                    textAnchor={isLeft ? 'start' : 'end'}
                    fontSize="20"
                    fontWeight="800"
                    fill="#e8ce70"
                    stroke="#000"
                    strokeWidth="2"
                    paintOrder="stroke fill"
                    fontFamily="BIZ UDMincho, serif"
                    letterSpacing="1"
                  >
                    {project.tool}
                  </text>
                </svg>
                {project.type === 'link' && (
                  <svg width="500" height="30" overflow="visible">
                    <text
                      x={isLeft ? '0' : '500'}
                      y="22"
                      textAnchor={isLeft ? 'start' : 'end'}
                      fontSize="14"
                      fontWeight="400"
                      fill="#c9a84c"
                      stroke="#000"
                      strokeWidth="1.5"
                      paintOrder="stroke fill"
                      fontFamily="BIZ UDMincho, serif"
                      style={{ cursor: 'pointer' }}
                      onClick={() => project.url && window.open(project.url, '_blank')}
                    >
                      {project.url}
                    </text>
                  </svg>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* 放大圖片 overlay */}
      {zoomedSrc && (
  <div
    onClick={() => setZoomedSrc(null)}
    style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0,0,0,0.85)',
      zIndex: 999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'zoom-out',
    }}
  >
    <Image
      src={zoomedSrc}
      alt="zoomed"
      width={900}
      height={1200}
      style={{ objectFit: 'contain', maxWidth: '90vw', maxHeight: '90vh' }}
    />
  </div>
)}
    </div>
  )
}