const contact = () => {
  let i = 0;
  const container = document.getElementById("container");
  const contactInfo = document.createElement("div");
  const contactMethod = document.createElement("OL");
  const contactMethods = ["Phone: 01234 403404", "Email: happylildumplings@gmail.com", "Address: 12 Village Rd, Newport, CD12 3HF"];
  for (i=0; i<3; i++) {
    let contactMethod = document.createElement("LI");
    contactMethod.textContent = contactMethods[i];
    contactInfo.appendChild(contactMethod);
  }
  container.appendChild(contactInfo);
}
export default contact;
