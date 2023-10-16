import {Image} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

const Card = ({name, img, url, imgOp}) => {
    return (
      <div>
      <div class="container max-w-sm rounded overflow-hidden shadow-md out-tr bg-stone-100 container">
        <Image
          className='image'
          src={img}
          alt="Project Image" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{name}</div>
        </div>
        <button className='text-stone-50 bg-indigo-400 p-2 ml-5 mb-2 rounded-md'>
          <a href={url}>Check It Out</a>
        </button>
      </div>
      <div className='image-Op absolute'>
        <Image
          src={imgOp}
          alt="Project Image" 
        />
        <h4 className='absolute blend z-10 bg-indigo-400'>The Fox, Chicken and Corn</h4>
      </div>
    </div>
    )
  } 

export default Card
  