import React, {useState} from 'react';

function ImageGallery({ photos }) {

  const [current, setCurrent] = useState(0);

  const nextPhoto = () => {
    setCurrent(current === photos.length - 1 ? 0 : current + 1);
  }

  const prevPhoto = () => {
    setCurrent(current === 0 ? photos.length - 1 : current - 1);
  }

  return (
    <div className='ImageGallery' style={{
      flex: "3",
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      padding: "2%",
      borderRadius: "25px",
      maxHeight: "50vh",
      width: "60vw",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        display: 'flex',
        height: '100%',
      }}>
        <span onClick={() => prevPhoto()} style={{
          fontSize: '5vh',
          marginTop: '20vh',
          cursor: 'pointer'

        }}>&#8592;</span>
        {<img src={photos[current].url} alt='Photo' style={{
          maxWidth: '90%',
          maxHeight: '90%',
          borderRadius: "25px",
          margin: 'auto'
        }}/>}
        <span onClick={() => nextPhoto()} style={{
          fontSize: '5vh',
          marginTop: '20vh',
          cursor: 'pointer'
        }}>&#8594;</span>
      </div>

    </div>
   );
}

export default ImageGallery;