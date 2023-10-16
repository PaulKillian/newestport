import {UiImage} from "@nextui-org/react";
import Image from "next/image";
import {Button} from "@nextui-org/react";

const Card = ({name, img, url, imgOp}) => {
    return (
      <div>
      <div class="container max-w-md rounded overflow-hidden shadow-md out-tr bg-stone-100 container">
        <Image
          className='image'
          src={img}
          alt="Project Image" 
          width={200}
          height={200}
          />
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
          width={700}
          height={700}
        />
      </div>
    </div>
    )
  } 

export default Card
  