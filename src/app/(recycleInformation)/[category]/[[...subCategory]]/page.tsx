import Image from 'next/image';
import { MaterialType } from '@/app/types/types';
import connectDB from '@database/connectDB';
import { recycleInfoDAO } from '@database/recycleInfoDAO';
import { notFound } from 'next/navigation';

async function getRecycleInfo(category: string, subCategory?: string) {
  await connectDB();

  const recycleResource = await recycleInfoDAO.findRecycleInfo(
    category,
    subCategory,
  );

  if (recycleResource === null) {
    throw new Error(`Cannot find ${category} recycle method`);
  }

  return recycleResource;
}

export default async function RecycleInfo({
  params,
}: {
  params: MaterialType;
}) {
  const category = params.category;
  const subCategory = params.subCategory ?? [];

  try {
    const information = await getRecycleInfo(category, ...subCategory);
    const { imageSource, recycleInfo } = Array.isArray(information)
      ? information[0]
      : information;

    return (
      <>
        <div
          style={{ '--image-url': `url(${imageSource})` }}
          className='flex min-h-screen min-w-full flex-col items-center justify-center bg-[image:var(--image-url)] bg-cover bg-center'
        >
          <h1>{recycleInfo}</h1>
        </div>
      </>
    );
  } catch (error) {
    console.error('분리수거 정보를 찾을 수 없습니다.', error);
    notFound();
  }
}
