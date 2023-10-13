import {Image} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

const Card = ({name, img, url}) => {
    return (
        <div class="container max-w-sm rounded overflow-hidden shadow-md out-tr bg-stone-100 container">
        <Image 
          className='image'
          src={img} 
          alt="Project Image" 
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{name}</div>
        </div>
        <button className='text-stone-50 bg-indigo-400 p-2 ml-5 mb-2 rounded-md'>
          <a href={url}>Check It Out</a>
        </button> 
        <div className="pop"></div> 
      </div>
    )
  } 

export default Card
  