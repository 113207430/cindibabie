
"use client"
import Image from "next/image"


function InfoRow({ zh, en }: { zh: string; en: string }) {
 return (
  <div
    style={{ textAlign: 'center', marginBottom: '0.1px', width: '100%'}}
    onMouseEnter={e => {
      (e.currentTarget as HTMLDivElement).style.filter = 'drop-shadow(0 0 12px #e8ce70)'
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLDivElement).style.filter = 'none'
    }}
  >
     {/* 中文 */}
     <svg width="100%" height="22" overflow="visible">
      
       <text
         x="50%"
         y="40"
         textAnchor="middle"
         fontSize="24"
         fontWeight="508"
         fill="#e8ce70"
         stroke="#000"
         strokeWidth="4"
         paintOrder="stroke fill"
         fontFamily="BIZ UDMincho, serif"
         letterSpacing="6"
         transform="scale(1.5, 1)"
         style={{ transformOrigin: 'center' }}
      
       >
         {zh}
       </text>
     </svg>


   {/* 英文 */}
     <svg width="100%" height="15" overflow="visible" style={{ marginTop: '20px' }}>


       <text
         x="50%"
         y="26"
         textAnchor="middle"
         fontSize="20"
         fontWeight="800"
         fill="#e8ce70"
         stroke="#000"
         strokeWidth="3"
         paintOrder="stroke fill"
         fontFamily="BIZ UDMincho, serif"
         letterSpacing="1"
         transform="scale(1, 0.7)"
        
       >
         {en}
       </text>
     </svg>
   </div>
 )
}


export default function About() {
 return (
   <div style={{
     backgroundImage: "url('/aboutbg.png')",
     backgroundSize: '100% 100%',
     backgroundPosition: 'top center',
     backgroundRepeat: 'no-repeat',
     width: '100%',
     height: '100vh',
     display: 'flex',
     alignItems: 'flex-end',
   }}>
     {/* 左邊獅子 */}
     <div style={{ width: '400px', flexShrink: 0, display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
       <Image src="/lionnn.png" alt="intro" width={400} height={320} style={{ objectFit: 'contain' }} />
     </div>


     {/* 中間金字塔 */}
     <div style={{
       flex: 1,
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'center',
       height: '100%',
       paddingTop: '40px',
       paddingBottom: '40px',
       paddingLeft: '20px',  
       paddingRight: '20px',
       position: 'relative', 
       zIndex: 10,           
      
     }}>
       <InfoRow zh="我" en="I" />
       <InfoRow zh="右撇子" en="am right-handed" />
       <InfoRow zh="喜歡刷牙" en="love teeth-brushing" />
       <InfoRow zh="喜歡藝術創作" en="love to create artworks" />
       <InfoRow zh="吃蘋果不喜歡削皮" en="only eat apples with the skin on" />
       <InfoRow zh="玩剪刀石頭布喜歡出布" en="choose paper when playing rock-paper-scissors" />
       <InfoRow zh="小時後以為下太陽雨就是下太陽雨" en="thought a sunshower was literally rain made of sunshine as a kid" />
       <InfoRow zh="精通英文、日文、泰文、西文    的謝謝" en="am capable of saying thank you in English, Japanese, Thai, and Spanish" />
       <InfoRow zh="在生命結束前想要搭飛機飛去埃及看金字塔" en="want to take a flight to Egypt and see the pyramids before my life comes to an end" />

       <div style={{
        position: 'absolute',
        bottom: '16px',
        color: '#e8ce70',
        fontFamily: 'BIZ UDMincho, serif',
        fontSize: '14px',
        letterSpacing: '2px',
        WebkitTextStroke: '1px black',
        paintOrder: 'stroke fill',
        whiteSpace: 'nowrap',
      }}>
        ＊金字塔可以發光＊
      </div>
       


     </div>


     {/* 右邊獅子 */}
     <div style={{ width: '400px', flexShrink: 0, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
       <Image src="/lionnn.png" alt="intro" width={400} height={320} style={{ objectFit: 'contain' }} />
     </div>

     {/* 正下方文字 */}
     {/* <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '280px',
        right: '0',
        textAlign: 'center',
        color: '#e8ce70',
        fontFamily: 'BIZ UDMincho, serif',
        fontSize: '14px',
        letterSpacing: '2px',
        WebkitTextStroke: '1px black',
        paintOrder: 'stroke fill',
        zIndex: 20,
      }}>
        ＊金字塔可以發光＊
      </div> */}


   </div>
 );
}

