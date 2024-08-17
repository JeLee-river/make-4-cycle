import Link from 'next/link';

function NonexistenceMaterial() {
  return (
    <div>
      <h2>분리수거 정보가 존재하지 않습니다.</h2>
      <p>현재 업로드하신 이미지의 분리수거 정보를 지원하지 않습니다.</p>
      <p>정확한 정보 전달을 위해 개선하겠습니다. 감사합니다.</p>
      <Link href='/'>메인으로 돌아가기</Link>
      <Link href='/dashboard'>다른 이미지 업로드</Link>
    </div>
  );
}

export default NonexistenceMaterial;
