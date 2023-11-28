function createNewElement(elemName, elemClass) {
  const elem = document.createElement(elemName);
  elem.className = elemClass;
  return elem;
}

export default createNewElement;