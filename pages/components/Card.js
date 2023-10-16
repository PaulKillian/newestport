import {UiImage} from "@nextui-org/react";
import Image from "next/image";
import {Button} from "@nextui-org/react";

const Card = ({name, img, url, imgOp}) => {
    return (
      <div>
      <div class="container max-w-md rounded overflow-hidden shadow-md out-tr bg-stone-100 container">
        <div class="px-2 mb-2">
          <div>{name}</div>
        </div>
        <Image
          className='image'
          src={img}
          alt="Project Image" 
          width={200}
          height={200}
          />
        <button className='text-stone-50 bg-indigo-400 p-2 ml-2 mt-3 mb-1 rounded-md'>
          <a href={url}>Check It Out</a>
        </button>
      </div>
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
  