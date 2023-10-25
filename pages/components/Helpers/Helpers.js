export const changeProject = (e, setWhichProject) => {
  setWhichProject(e.target.alt)
}

export const removeOrAddOverflow = (e) => {
  debugger
  if (e.target.className === 'blend') {
    const element = document.getElementById('overFlow')
    element.classList.add('overflow-x-hidden');
  } else {
    const element = document.getElementById('overFlow')
    element.classList.remove('overflow-x-hidden');
  } 
}