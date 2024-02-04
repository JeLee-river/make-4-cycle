import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PredictionType } from '../types/types';

type ImageUploaderType = {
  inputImageSource: string;
  prediction: PredictionType;
};

function ImageUploader({ inputImageSource, prediction }: ImageUploaderType) {
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
          <p>{prediction.probability}</p>
          <Link
            href={
              prediction && prediction.probability > 0.7
                ? `/${prediction.category}/${prediction.subCategory}`
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
