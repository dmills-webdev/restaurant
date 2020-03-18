const reset = () => {
  const container = document.getElementById("container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
export default reset;
