import Image from 'next/image';
import { MaterialType } from '@/app/types/types';

async function getRecycleInfo(segment: string) {
  const information = await fetch(
    `https://${process.env.VERCEL_URL}/recycleInfo/${segment}`,
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
      <Image src={imageSource} fill alt='업로드한 이미지' />
      <h1>{recycleInfo}</h1>
    </>
  );
}
