import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Make 4 Cycle</h1>
      <p>4단계의 분리수거로 순환하는 지구</p>
      <Link href='/dashboard'>시작하기</Link>
    </main>
  );
}
