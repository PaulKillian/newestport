export const changeProject = (e, setWhichProject) => {
  setWhichProject(e.target.alt)
}

const removeOrAddOverflow = (e) => {
  if (e.target.className === 'blend') {
    const element = document.getElementById('overFlow')
    element.classList.add('overflow-x-hidden');
  } else {
    const element = document.getElementById('overFlow')
    element.classList.remove('overflow-x-hidden');
  } 
}

export default removeOrAddOverflow