import Footer from './components/Footer';
import './globals.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className='relative flex min-h-screen min-w-full flex-col items-center justify-center bg-black bg-opacity-30 bg-main bg-cover bg-center bg-blend-darken'>
        <section className='flex h-full w-full flex-col items-center justify-center text-center'>
          <h1 className='m-2 text-7xl font-medium text-white'>Make 4 Cycle</h1>
          <p className='text-1xl m-1 text-white'>
            4단계의 분리수거로 순환하는 지구
          </p>
          <Link
            href='/image-uploader'
            className='text-1xl m-5 min-w-24 rounded-3xl bg-yellow p-2 text-center font-medium text-dark-green transition-colors hover:bg-green hover:text-white hover:duration-300'
          >
            시작하기
          </Link>
        </section>
        <div className='absolute bottom-0 left-0 h-full max-h-[calc(100vh/20)] p-2'>
          <Footer />
        </div>
      </main>
    </>
  );
}
