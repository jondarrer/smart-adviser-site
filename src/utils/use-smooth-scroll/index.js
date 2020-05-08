const useSmoothScroll = (offsets) => {
  return (e) => {
    let id;

    if (typeof e === 'string') {
      id = e;
    } else {
      e.preventDefault();
    }

    try {
      const windowWidth = window.innerWidth;
      let fixedOffset = 0;

      Object.keys(offsets).forEach((offset) => {
        if (windowWidth >= parseInt(offset)) {
          fixedOffset = offsets[offset];
        }
      });

      id = id || e.currentTarget.getAttribute('href').slice(1);
      smoothScrollTo(id, fixedOffset);
    } catch (ex) {
      console.log(ex);
    }
  };
};

const smoothScrollTo = (id, fixedOffset = 0) => {
  const anchor = document.getElementById(id);
  const offsetTop = anchor.getBoundingClientRect().top + window.pageYOffset;
  window.scroll({
    top: offsetTop - fixedOffset,
    behavior: 'smooth',
  });
};

export default useSmoothScroll;
export { useSmoothScroll, smoothScrollTo };
