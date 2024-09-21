import Image from 'next/image';
import { MaterialType } from '@/app/types/types';

async function getRecycleInfo(segment: string) {
  const information = await fetch(
    `${process.env.NEXT_PUBLIC_API}/recycleInfo/${segment}`,
  ).then((res) => res.json());

  const { imageSource, recycleInfo } = Array.isArray(information)
    ? information[0]
    : information;

  return { imageSource, recycleInfo };
}

export default async function RecycleInfo({
  params,
}: {
  params: MaterialType;
}) {
  const category = params.category;
  const subCategory = params.subCategory ?? [];
  const segment = `${category}/${subCategory.join('/')}`;
  const { imageSource, recycleInfo } = await getRecycleInfo(segment);

  return (
    <>
      <div
        style={{ '--image-url': `url(${imageSource})` }}
        className='flex min-h-dvh min-w-full flex-col items-center justify-center bg-white bg-opacity-30 bg-[image:var(--image-url)] bg-cover bg-center bg-blend-darken'
      >
        <h1>{recycleInfo}</h1>
      </div>
    </>
  );
}
