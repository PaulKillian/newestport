import Image from "next/image";

const Card = ({name, img, url, imgOp}) => {
  return (
    <>
      <a className='shadow-md imgevento container' target="_blank" href={url}>
        <div class="max-w-md floating card bg-card rounded overflow-hidden shadow-md out-tr container">
          <Image
            className='image blend'
            src={img}
            alt={name}
            width={250}
            height={250}
          />  
        </div>
      </a>
      <div className='image-Op absolute'>
        <Image
          src={imgOp}
          alt="Project Image" 
          width={700}
          height={700}
        />
      </div>
    </>
    )
  } 

export default Card
  