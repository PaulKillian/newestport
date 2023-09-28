import {Image} from "@nextui-org/react";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

const Card = ({img, url}) => {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200">
        <Image 
          // class="w-full" 
          src={img} 
          // height={200}
          // width={650}
        alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-indigo-500">SwiftSupport</div>
          <p class="text-gray-600 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-indigo-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">React</span>
          <Popover placement="bottom" showArrow={true}>
            <PopoverTrigger>
              <Button>Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="relative site-pop">
                <iframe 
                  src={url}
                  width="100%" 
                  height="100%" 
                />
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    )
  } 

export default Card
  