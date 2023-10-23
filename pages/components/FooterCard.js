import Image from "next/image"

export const about =
  [
    {
      title: 'The Beach',
      descript: 'When I am not working, I am at the beach with my family digging deep holes for my children to play in.',
      img: '/beach3.png',
      name: 'beach3'
    },
    {
      title: 'Exploration',
      descript: 'I liken web development to space exploration in its endless potential and vastness of possibilities.',
      img: '/spc.png',
      name: 'spc'
    }, 
    {
      title: 'Body Boarding',
      descript: "I have ridden waves my whole life. There's little that compares to the thrill of racing down the face of a wave.",
      img: '/wave.png',
      name: 'wave'
    }
  ]

export default function FooterCard({setWhichBg, title, descript, img, name}) {
  function changeBg(e) {
    setWhichBg(e.target.alt)
  }

  return (
    <div class="max-w-sm border border-gray-200 rounded-lg shadow m-3">
      <Image 
        onMouseOver={() => changeBg(event)}
        class="rounded-t-lg" 
        src={img}
        alt={name} 
        width={450}
        height={50}
      />
      <div class="p-2 glass">
        <h5 class="mb-2 text-4xl tracking-tight font-bold tracking-tight text-white">{title}</h5>
        <p class="mb-3 text-stone-50 font-normal text-left text-gray-900">{descript}</p>
      </div>
    </div>
  )
}

 {/* <h1 className='text-stone-50'><a className='text-stone-50' href='mailto:psk65lava@gmail.com'>Email</a></h1>
                    <h1 className='text-stone-50'><a href='https://www.linkedin.com/in/paul-killian/'>LinkedIn</a></h1>
                    <h1 className='text-stone-50'><a href='https://www.github.com/PaulKillian'>Github</a></h1> */}


