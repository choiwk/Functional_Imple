import React, { useState, useRef } from 'react';
import './ImageGallery.css';
import ImageBox from './ImageBox';

function ImageGallery() {
  const [imageList, setImageList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const reader = new FileReader();

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
          <input
            type="file"
            ref={inputRef}
            onChange={(e) => {
              const imageRoute = e.currentTarget.files;

              if (imageRoute?.[0]) {
                const file = imageRoute[0];
                reader.readAsDataURL(file);
                reader.onloadend = (event) => {
                  setImageList((prev) => [
                    ...prev,
                    event.target?.result as string,
                  ]);
                };
              }
            }}
          />
          {imageList.map((el, idx) => (
            <ImageBox key={el + idx} src={el}></ImageBox>
          ))}
          <div
            className="plus-box"
            onClick={() => {
              inputRef.current?.click();
            }}
          >
            +
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageGallery;
