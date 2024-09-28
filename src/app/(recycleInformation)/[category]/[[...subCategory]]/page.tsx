import Image from 'next/image';
import { unstable_noStore as noStore } from 'next/cache';
import { MaterialType } from '@/app/types/types';

async function getRecycleInfo(segment: string) {
  noStore();
  const apiURL =
    process.env.NODE_ENV === 'production'
      ? ''
      : process.env.NEXT_PUBLIC_API_URL;

  const information = await fetch(`${apiURL}/api/recycleInfo/${segment}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));

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
