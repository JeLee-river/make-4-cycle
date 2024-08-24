import './globals.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className='flex items-center justify-center bg-cover bg-center bg-blend-darken bg-black bg-opacity-30 bg-[url("https://res.cloudinary.com/dr26wooar/image/upload/v1711363534/make4cycle/main.jpg")] min-w-full min-h-dvh'>
        <div className='flex flex-col items-center justify-center text-center w-full h-full'>
          <h1 className='m-2 text-white text-7xl font-medium'>Make 4 Cycle</h1>
          <p className='m-1 text-white text-1xl'>
            4단계의 분리수거로 순환하는 지구
          </p>
          <Link
            href='/image-uploader'
            className='m-5 p-2 min-w-24 rounded-3xl bg-yellow hover:bg-green text-dark-green hover:text-white text-1xl font-medium text-center'
          >
            시작하기
          </Link>
        </div>
      </section>
    </main>
  );
}
