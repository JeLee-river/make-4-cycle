'use client';

import React, { useState } from 'react';
import Image from 'next/image';

function ImageUploader() {
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

  return (
    <>
      <div>
        <input
          type='file'
          accept='image/png, image/jpeg, image/jpg'
          onChange={handleChangePreviewImage}
        />
      </div>
      {inputImageSource.length > 0 && (
        <div className='ImageUploader_previewUploadImage'>
          <Image
            src={inputImageSource}
            width={500}
            height={500}
            alt='업로드한 이미지'
          />
        </div>
      )}
    </>
  );
}

export default ImageUploader;
