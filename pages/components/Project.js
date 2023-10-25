import { TypeAnimation } from 'react-type-animation';

const Project = ({whichProject}) => {
  return (
    <TypeAnimation
      sequence={[
        whichProject
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '8vw', position: 'absolute', color: '#FAFAF9' }}
      cursor={false}
    />
  )
}

export default Project