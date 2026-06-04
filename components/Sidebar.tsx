"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const sidebarContent = (
    <div className="w-[280px] h-full p-4" style={{ backgroundColor: '#482a1d', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '3px' }}>
      <Link href="/home" onClick={() => setMenuOpen(false)}>
        <div className="flex justify-center items-center w-full" id="work-1">
          <Image src="/cdbb.png" alt="avatar" width={100} height={100} />
        </div>
      </Link>

      <div className="text-center sidebar-info">陳歆穎</div>
      <div className="text-center sidebar-info">19y | NCCU LE | NCCU DCT</div>

      <div className="flex gap-2 justify-center" style={{ marginTop: '16px' }}>
        <a href="https://www.instagram.com/cindibabie" target="_blank" rel="noopener noreferrer">
          <div className="w-[60px] h-[60px] flex justify-center items-center">
            <Image src="/INS.png" alt="instagram" width={60} height={60} />
          </div>
        </a>
        <a href="mailto:sinying950821@gmail.com">
          <div className="w-[60px] h-[60px] flex justify-center items-center">
            <Image src="/EMAIL.png" alt="email" width={60} height={60} />
          </div>
        </a>
        <a href="https://www.facebook.com/chen.xin.ying.565718" target="_blank" rel="noopener noreferrer">
          <div className="w-[60px] h-[60px] flex justify-center items-center">
            <Image src="/FB.png" alt="facebook" width={60} height={60} />
          </div>
        </a>
      </div>

      <div className="flex gap-7 justify-center sidebar-info" id="work-2">
        <div>Instagram</div>
        <div>Email</div>
        <div>Facebook</div>
      </div>

      <Link href="/about" onClick={() => setMenuOpen(false)}>
        <div id="btn-about" style={{ marginTop: '40px' }}>關於我</div>
      </Link>
      <Link href="/hobby" onClick={() => setMenuOpen(false)}>
        <div id="btn-hobby">我的興趣</div>
      </Link>
      <Link href="/portfolio" onClick={() => setMenuOpen(false)}>
        <div id="btn-portfolio">我的作品集</div>
      </Link>
      <Link href="/core" onClick={() => setMenuOpen(false)}>
        <div id="btn-core">點開我ㄉ腦</div>
      </Link>
    </div>
  );

  return (
    <>
      {!isMobile && (
        <div className="h-full flex-shrink-0">
          {sidebarContent}
        </div>
      )}

      {isMobile && menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="h-full overflow-y-auto">
            {sidebarContent}
          </div>
          <div className="flex-1" onClick={() => setMenuOpen(false)} />
        </div>
      )}

      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 100,
            backgroundColor: 'rgba(72, 42, 29, 0.5)',
            border: 'none',
            borderRadius: '50%',
            width: '56px',
            height: '56px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0',
          }}
        >
          <Image
            src={menuOpen ? '/close.png' : '/menew.png'}
            alt="menu"
            width={36}
            height={36}
            style={{ objectFit: 'contain' }}
          />
        </button>
      )}
    </>
  );
}