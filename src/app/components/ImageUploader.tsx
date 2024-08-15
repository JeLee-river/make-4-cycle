import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PredictionType } from '../types/types';

type ImageUploaderType = {
  inputImageSource: string;
  prediction: PredictionType;
};

function ImageUploader({ inputImageSource, prediction }: ImageUploaderType) {
  const probability = prediction.probability;
  const categoryArray = prediction.category.split('-');
  const category = categoryArray.shift();
  const subCategory = categoryArray.join('-');
  const recycleInfoLink = subCategory
    ? `/${category}/${subCategory}`
    : `/${category}`;

  return (
    <>
      {inputImageSource && prediction && (
        <>
          <div className='ImageUploader_previewUploadImage'>
            <Image
              src={inputImageSource}
              width={500}
              height={500}
              alt='업로드한 이미지'
            />
          </div>
          <p>{probability}</p>
          <Link
            href={
              prediction && probability > 0.7
                ? recycleInfoLink
                : '/nonexistence-material'
            }
          >
            분리수거 방법 확인
          </Link>
        </>
      )}
    </>
  );
}

export default ImageUploader;
