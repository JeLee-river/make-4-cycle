'use client';

import { useState, useEffect } from 'react';
import ImageUploader from '@/app/components/ImageUploader';
import useTeachableModelPredict from '@/app/hooks/useTeachableModelPredict';
import { PredictionType } from '@/app/types/types';

function ImageUploaderPage() {
  const [prediction, setPrediction] = useState<PredictionType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [inputImage, setInputImage] = useState<string>('');

  const handleChangePreviewImage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const usersInputImage = event.target.files;
    if (usersInputImage) {
      const usersInputImageURL = URL.createObjectURL(usersInputImage[0]);
      setInputImage(usersInputImageURL);
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

  return (
    <>
      <div>
        <input
          type='file'
          accept='image/png, image/jpeg, image/jpg'
          onChange={handleChangePreviewImage}
        />
      </div>
      <ImageUploader inputImageSource={inputImage} prediction={prediction!} />
    </>
  );
}

export default ImageUploaderPage;
