import Image from "next/image";
export default function HomeContent() {
  return (

    <div style={{
      backgroundImage: "url('/h0me.png')",
      backgroundSize: '100% 100%',
      backgroundPosition: 'top center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100vh',
    }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}>
            <Image
              src="/intro.png"
              alt="intro"
              width={600}
              height={480}
              style={{ objectFit: 'contain' }}
            />
          </div>

    </div>

  );
}