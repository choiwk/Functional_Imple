import './ImageGallery.css';

function ImageBox(props: { src: string }) {
  const { src } = props;
  return (
    <>
      <div className="image-box">
        <img src={src} alt="이미지" />
      </div>
    </>
  );
}

export default ImageBox;
