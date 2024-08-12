import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

const getServerSideProps = (async (context) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/recycleInfo/${context.params?.category}`
  );
  const { recycleInfo }: { recycleInfo: string } = await res.json();
  return { props: { recycleInfo } };
}) satisfies GetServerSideProps<{ recycleInfo: string }>;

export default function Page({
  recycleInfo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <h1>{recycleInfo}</h1>;
}
