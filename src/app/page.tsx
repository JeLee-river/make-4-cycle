import './globals.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-dvh min-w-full items-center justify-center bg-black bg-opacity-30 bg-main bg-cover bg-center bg-blend-darken'>
      <section className='flex h-full w-full flex-col items-center justify-center text-center'>
        <h1 className='m-2 text-7xl font-medium text-white'>Make 4 Cycle</h1>
        <p className='text-1xl m-1 text-white'>
          4단계의 분리수거로 순환하는 지구
        </p>
        <Link
          href='/image-uploader'
          className='text-1xl m-5 min-w-24 rounded-3xl bg-yellow p-2 text-center font-medium text-dark-green hover:bg-green hover:text-white'
        >
          시작하기
        </Link>
      </section>
    </main>
  );
}
