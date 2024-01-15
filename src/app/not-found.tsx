import Link from 'next/link';

async function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>분리수거 정보가 존재하지 않습니다. 다른 사진을 넣어주세요.</p>
      <p>
        <Link href='/'>메인으로 돌아가기</Link>
      </p>
    </div>
  );
}

export default NotFound;
