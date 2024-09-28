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
        <Image src={imageSource} fill alt='업로드한 이미지' />
        <h1>{recycleInfo}</h1>
      </>
    );
  } catch (error) {
    console.error('분리수거 정보를 찾을 수 없습니다.', error);
    notFound();
  }
}
