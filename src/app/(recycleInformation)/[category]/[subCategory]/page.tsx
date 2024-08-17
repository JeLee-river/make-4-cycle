import Image from 'next/image';
import { MaterialType } from '@/app/types/types';

async function getRecycleInfo(segment: string) {
  const information = await fetch(
    `${process.env.NEXT_PUBLIC_API}/recycleInfo/${segment}`
  ).then((res) => res.json());
  const { imageSource, recycleInfo } = information;

  return { imageSource, recycleInfo };
}

export default async function RecycleInfo({
  params,
}: {
  params: MaterialType;
}) {
  const category = params.category;
  const subCategory = params.subCategory ?? '';
  const segment = `${category}/${subCategory}`;
  const { imageSource, recycleInfo } = await getRecycleInfo(segment);

  return (
    <>
      <Image
        src={imageSource}
        width={400}
        height={600}
        alt={`${category}-${subCategory}`}
      />
      <h1>{recycleInfo}</h1>
    </>
  );
}
