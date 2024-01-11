'use client';

import { useState, useEffect } from 'react';
import ImageUploader from '../components/ImageUploader';
import useTeachableModelPredict from '../hooks/useTeachableModelPredict';

type Prediction = {
  className: string;
  probability: number;
};

function Dashboard() {
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [inputImageSource, setInputImageSource] = useState<string>('');

  const handleChangePreviewImage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const usersInputImage = event.target.files;
    if (usersInputImage) {
      const usersInputImageURL = URL.createObjectURL(usersInputImage[0]);
      setInputImageSource(usersInputImageURL);
    }
  };

  useEffect(() => {
    async function PredictImage() {
      setLoading(true);
      const targetImage = new Image();
      targetImage.src = inputImageSource;
      await targetImage.decode();
      const result = await useTeachableModelPredict(targetImage);
      setPrediction(result);
      setLoading(false);
    }

    if (inputImageSource) {
      PredictImage();
    }
  }, [inputImageSource]);

  return (
    <>
      <div>
        <input
          type='file'
          accept='image/png, image/jpeg, image/jpg'
          onChange={handleChangePreviewImage}
        />
      </div>
      <ImageUploader
        inputImageSource={inputImageSource}
        prediction={prediction}
      />
    </>
  );
}

export default Dashboard;
