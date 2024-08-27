'use client';

import { useState, useEffect, useRef } from 'react';
import ImageUploader from '@/app/components/ImageUploader';
import DragImageHandler from '@/app/components/DragImageHandler';
import useTeachableModelPredict from '@/app/hooks/useTeachableModelPredict';
import { PredictionType } from '@/app/types/types';

function ImageUploaderPage() {
  const [prediction, setPrediction] = useState<PredictionType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [inputImage, setInputImage] = useState<string>('');
  const inputImageRef = useRef<HTMLInputElement>(null);

  const handleChangePreviewImage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const usersInputImage = event.target.files;
    if (usersInputImage) {
      const usersInputImageURL = URL.createObjectURL(usersInputImage[0]);
      setInputImage(usersInputImageURL);
    }
  };

  const handleUploadClick = () => {
    if (inputImageRef.current) {
      inputImageRef.current.click();
    }
  };

  useEffect(() => {
    async function PredictImage() {
      setLoading(true);
      const targetImage = new Image();
      targetImage.src = inputImage;
      await targetImage.decode();
      const result = await useTeachableModelPredict(targetImage);
      setPrediction(result);
      setLoading(false);
    }

    if (inputImage) {
      PredictImage();
    }
  }, [inputImage]);

  useEffect(() => {
    return () => {
      if (inputImage) {
        URL.revokeObjectURL(inputImage);
      }
    };
  }, [inputImage]);

  return (
    <>
      <input
        ref={inputImageRef}
        className='hidden'
        type='file'
        accept='image/png, image/jpeg, image/jpg'
        onChange={handleChangePreviewImage}
      />
      {prediction ? (
        <div className='flex flex-col items-center justify-center'>
          <button
            className='w-1/3 rounded-3xl bg-yellow hover:bg-green text-dark-green hover:text-white text-1xl font-medium text-center'
            onClick={handleUploadClick}
          >
            파일 업로드하기
          </button>
          <ImageUploader
            inputImageSource={inputImage}
            prediction={prediction}
          />
        </div>
      ) : (
        <DragImageHandler
          setInputImage={setInputImage}
          handleUploadClick={handleUploadClick}
        />
      )}
    </>
  );
}

export default ImageUploaderPage;
