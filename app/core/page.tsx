"use client"
import Image from "next/image"
import { useState } from "react"

export default function Core() {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        backgroundImage: "url('/corebg.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* 中間文字區塊 */}
      <div style={{
  position: 'absolute',
  top: '12%',
  left: '10%',
  right: '10%',
  fontWeight: '508',
  color: '#e8ce70',
  fontFamily: 'BIZ UDMincho, serif',
  fontSize: '25px',
  lineHeight: '1.8',
  WebkitTextStroke: '5px black',
  letterSpacing: '3px',
  paintOrder: 'stroke fill',
  zIndex: 10,
}}>
        <p>雖然有時候在台北車站的人潮洶湧裡面遇到那種要走不走的人會很想巴他們的頭，不過我還是覺得心中有愛是很重要的特質，我也希望自己像自己的期待一樣有愛</p>
        <p style={{ marginTop: '8px' }}>我發現，當我感受到自己處在有愛的狀態，就是我能夠特別有力氣在找樂子、觀察周圍的有趣跟美麗跟幽默的時侯</p>
        <p style={{ marginTop: '8px' }}>我覺得在這個什麼都發展得咻咻嘣的年代，慢下來從自己的角度去感受生活周遭然後轉化然後輸出，是每個人的價值所在</p>
        <p style={{ marginTop: '8px' }}>好了先不聊了，鬧鐘響了我要去把烘衣機裡面的衣服拿回來了，</p>
        <p>我有時候看到有人衣服明明烘好但就是遲遲不收回去就會很想巴他們的頭</p>
        <p style={{ marginTop: '8px' }}>但沒關係啦，他們可能在跟媽媽講電話吧</p>
      </div>

      {/* 右下角圖片 */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          transition: 'transform 0.3s ease',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          cursor: 'pointer',
          zIndex: 1,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={hovered ? '/me2.png' : '/me1.png'}
          alt="me"
          width={360}
          height={440}
          style={{ objectFit: 'contain', display: 'block' }}
        />
        <div style={{
    position: 'absolute',
    bottom: '16px',
    left: '0',
    right: '0',
    color: '#e8ce70',
    fontFamily: 'BIZ UDMincho, serif',
    fontSize: '14px',
    textAlign: 'center',
    WebkitTextStroke: '2px black',
    paintOrder: 'stroke fill',
    letterSpacing: '1px',
    zIndex: 2,
  }}>
    ＊你可以點我，也可以不要＊
  </div>
        
      </div>
    </div>
  )
}