import Image from "next/image";

const Card = ({name, img, url, imgOp, id}) => {
    return (
      <div className="blend">
      <a className='shadow-md container' target="_blank" href={url}>
        <div class="max-w-md card rounded overflow-hidden shadow-md out-tr bg-stone-100 container">
          <Image
            className='image'
            id={id}
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
    </div>
    )
  } 

export default Card
  