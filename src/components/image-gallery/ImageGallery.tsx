import React, { useState, useRef, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './ImageGallery.css';
import ImageBox from './ImageBox';

function ImageGallery() {
  const [imageList, setImageList] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);

    if (acceptedFiles.length) {
      for (const file of acceptedFiles) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = (event) => {
          setImageList((prev) => [...prev, event.target?.result as string]);
        };
      }
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <div className="container">
        <div className={'gallery-box ' + (imageList.length > 0 && 'row')}>
          {imageList.length === 0 && (
            <div className="text-center">
              <p>
                이미지가 존재하지 않습니다 <br />
                이미지를 추가해주세요
              </p>
            </div>
          )}
          {imageList.map((el, idx) => (
            <ImageBox key={el + idx} src={el} />
          ))}

          <div className="plus-box" {...getRootProps()}>
            <input {...getInputProps()} />+
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageGallery;
