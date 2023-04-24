export const lockScroll = (add: boolean) => {
  add
    ? document.body.classList.add("lock-scroll")
    : document.body.classList.remove("lock-scroll");
};

// export const removeLockScroll = () => {};
