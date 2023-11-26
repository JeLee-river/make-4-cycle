import Image from 'next/image';
import styles from './page.module.css';
import ImageUploader from './components/ImageUploader';

export default function Home() {
  return (
    <main>
      <h1>Make 4 Cycle</h1>
      <ImageUploader />
    </main>
  );
}
