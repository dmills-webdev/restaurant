const menu = () => {
  let i = 0;
  const container = document.getElementById("container");
  const menu = document.createElement("div");
  const menuItems = document.createElement("OL");
  const listOfFood = ["Spring rolls: £4", "Dumplings: £3.50", "Sweet and Sour Chicken: £6.50", "Egg fried rice: £2.50"];
  for (i=0; i<4; i++) {
    console.log(listOfFood[i]);
    let menuItem = document.createElement("LI");
    menuItem.textContent = listOfFood[i];
    menuItems.appendChild(menuItem);
  }
  menu.appendChild(menuItems);
  container.appendChild(menu);
}
export default menu;
