const useSmoothScroll = (offsets) => {
  return (e) => {
    e.preventDefault();

    try {
      const windowWidth = window.innerWidth;
      let fixedOffset = 0;

      Object.keys(offsets).forEach((offset) => {
        if (windowWidth >= parseInt(offset)) {
          fixedOffset = offsets[offset];
        }
      });

      const id = e.currentTarget.getAttribute('href').slice(1);
      const anchor = document.getElementById(id);
      const offsetTop = anchor.getBoundingClientRect().top + window.pageYOffset;
      window.scroll({
        top: offsetTop - fixedOffset,
        behavior: 'smooth',
      });
    } catch (ex) {
      console.log(ex);
    }
  };
};

export default useSmoothScroll;
