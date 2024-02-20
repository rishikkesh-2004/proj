// Sample menu items with images
const menuItems = [
  { id: 1, name: "Pizza", price: 10, image: "images/pizza.jpg" },
  { id: 2, name: "Burger", price: 8, image: "images/burger.jpg" },
  { id: 3, name: "Salad", price: 6, image: "images/salad.jpg" },
];

// Function to display menu items
function displayMenu() {
  const menuList = document.getElementById("menu-list");
  menuItems.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("menu-item");
    li.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <div class="menu-item-details">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
                <button onclick="addItem(${item.id})">Add</button>
            </div>
        `;
    menuList.appendChild(li);
  });
}

// Function to add an item to the order
function addItem(itemId) {
  const selectedItem = menuItems.find((item) => item.id === itemId);
  const orderList = document.getElementById("order-list");
  const li = document.createElement("li");
  li.textContent = `${selectedItem.name} - $${selectedItem.price}`;
  orderList.appendChild(li);
}

// Function to handle checkout
function checkout() {
  alert("Your order has been placed!");
}

// Function to toggle login form visibility
function toggleLoginForm() {
  const loginForm = document.getElementById("login-form");
  loginForm.style.display =
    loginForm.style.display === "block" ? "none" : "block";
}

// Call displayMenu function when the page loads
window.onload = displayMenu;
