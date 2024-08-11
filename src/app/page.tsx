import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className='bg-cover bg-center bg-[url("https://res.cloudinary.com/dr26wooar/image/upload/v1711363534/make4cycle/main.jpg")] min-w-full min-h-screen'>
        <h1 className='text-white'>Make 4 Cycle</h1>
        <p className='text-white'>4단계의 분리수거로 순환하는 지구</p>
        <Link href='/image-uploader' className='text-white'>
          시작하기
        </Link>
      </section>
    </main>
  );
}
