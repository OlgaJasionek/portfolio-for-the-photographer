export const lockScroll = (add: boolean) => {
  if (add) {
    document.body.classList.add("lock-scroll");
  } else {
    document.body.classList.remove("lock-scroll");
  }
};
