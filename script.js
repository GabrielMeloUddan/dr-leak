function setup() {
  // Dark mode
  const userAvatar = document.querySelector('.user')
  if (userAvatar) {
    userAvatar.addEventListener('click', () => {
      document.querySelector('main').classList.toggle('dark')
    })
  }
}
