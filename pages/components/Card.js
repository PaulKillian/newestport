import Image from "next/image";

const Card = ({setWhichProject, name, img, url, imgOp}) => {
  const changeProject = (e) => {
    setWhichProject(e.target.alt)
  }

  return (
    <div>
      <a className='shadow-md imgevento container' target="_blank" href={url}>
        <div class="max-w-md floating card bg-card rounded overflow-hidden shadow-md out-tr container">
          <Image
            onMouseOver={() => changeProject(event)}
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
    </div>
    )
  } 

export default Card
  