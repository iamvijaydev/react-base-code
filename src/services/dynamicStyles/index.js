const registry = {};

const replaceStyles = (uid, styles) => {
  const style = document.getElementById(uid);

  if (style) {
    style.innerHTML = styles;
  }
};

const injectStyles = (uid, styles) => {
  registry[uid] = true;

  const style = document.createElement('style');

  style.id = uid;
  style.innerHTML = styles;
  document.head.appendChild(style);
};

const dynamicStyles = (uid, styles) => {
  if (registry[uid]) {
    replaceStyles(uid, styles);
  } else {
    injectStyles(uid, styles);
  }
};

export default dynamicStyles;
