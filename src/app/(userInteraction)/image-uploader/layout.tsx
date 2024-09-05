export default function ImageUploaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='flex h-svh min-h-min w-full min-w-min items-center justify-center p-6'>
      {children}
    </section>
  );
}
