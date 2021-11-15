const handlePlaceholder = e => {
  if (e.target.value !== '') {
    e.target.classList.add('texted')
  } else {
    e.target.classList.remove('texted')
  }
}

export default handlePlaceholder
