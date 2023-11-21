export const blockScroll = () => {
  document.body.classList.add("blocked")
}

export const unlockScroll = () => {
  document.body.classList.remove("blocked")
}