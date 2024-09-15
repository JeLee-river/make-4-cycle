import Link from 'next/link';

export default function ImageUploaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='flex h-svh min-h-min w-full min-w-min flex-col items-center justify-center bg-dark-green p-6'>
      <Link
        title='Make 4 cycle 메인페이지로 이동'
        href='/'
        className='m-6 text-4xl font-medium text-white'
      >
        Make 4 Cycle
      </Link>
      {children}
    </section>
  );
}
