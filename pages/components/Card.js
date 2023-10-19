import Image from "next/image";

const Card = ({name, img, url, imgOp}) => {
    return (
      <div>
      <a className='shadow-md container' href={url}>
        <div class="max-w-md card rounded overflow-hidden shadow-md out-tr bg-stone-100 container">
          <div class="text-stone-50 px-2 mb-2">
            <div>{name}</div>
          </div>
          <Image
            className='image'
            src={img}
            alt={name}
            width={200}
            height={200}
          />
      {/* <button className='text-stone-50 bg-indigo-400 p-2 ml-2 mt-3 mb-1 rounded-md'>
        <a href={url}>Check It Out</a>
      </button> */}
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
  