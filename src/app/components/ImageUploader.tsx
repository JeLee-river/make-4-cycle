import React from 'react';
import Image from 'next/image';

type ImageUploaderType = {
  inputImageSource: string;
};

function ImageUploader({ inputImageSource }: ImageUploaderType) {
  return (
    <>
      {inputImageSource && (
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
