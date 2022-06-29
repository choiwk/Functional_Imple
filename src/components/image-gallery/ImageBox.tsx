import './ImageGallery.css';

function ImageBox(props: { src: string }) {
  const { src } = props;

  return (
    <>
      <div className="image-box">
        <img src={src} alt="" />
      </div>
    </>
  );
}

export default ImageBox;
