import React from 'react';

export default function Overview({product_info, product_styles}) {
  if (product_styles.results === undefined) {
    return (<div className='Overview'>Hold</div>);
  }
  const styles = product_styles.results;
  let styleIndex = 0;
  for (var i = 0; i < styles.length; i++) {
    if (styles[i]['default?']) {
      styleIndex = i;
    }
  }

  return(
    <div className='Overview'>
      <div className='ImageGallery' style={{
        backgroundImage: `url(${product_styles.results[styleIndex].photos[0].url})`}}>
      </div>
      <div className='ProductTile pad'>
        <div className='Reviews'>***** <a href='.RatingsAndReviews'>Read all reviews</a></div>
        <h4>{product_info.category}</h4>
        <h1>{product_info.name}</h1>
        <p><strong>STYLE > </strong>{product_styles.results[styleIndex].name}</p>
        <div className='pad'>
          {product_styles.results.map((style, index) => {
            const imageUrl = style.photos[0].thumbnail_url;
            return (<img
              key={style.style_id}
              className='round-thumbnail'
              src={imageUrl}
              alt={style.name}
              ></img>)
          })}
        </div>
      </div>
    </div>
  )

}

