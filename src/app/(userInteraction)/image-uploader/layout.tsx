export default function ImageUploaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='flex min-h-dvh min-w-full items-center justify-center bg-dark-green bg-cover bg-center'>
      {children}
    </section>
  );
}
