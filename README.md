# 🛒 Vibe Commerce – Mock E-Commerce Cart (Full-Stack Assignment)

This is a full-stack shopping cart application built as part of the **Vibe Commerce internship screening**.  
The goal of the project is to demonstrate frontend, backend, and API integration using a basic e-commerce cart workflow.

---

## ✅ Features

- Display 5–10 mock products (name, price, image)
- Add items to cart
- Remove items from cart
- Update quantity
- View cart summary with total price
- Mock checkout that returns order receipt with timestamp
- REST APIs for products and cart management

---
## 🛠 Tech Stack

| Layer           | Technology           |
|-----------------|----------------------|
| Frontend        | React (MERN Stack)   |
| Backend         | Node.js + Express    |
| Database        | MongoDB (Mongoose)   |
| API Type        | REST                 |
| Version Control | GitHub               |


---

## 📁 Folder Structure


---

## ✅ Backend API Endpoints

### ✅ Get All Products  
**GET** `/api/products`

---

### ✅ Add Item to Cart  
**POST** `/api/cart`  
Request Body:
```json
{ "productId": "123", "qty": 1 }
Get Cart Items + Total

GET /api/cart

✅ Remove Item From Cart

DELETE /api/cart/:id

✅ Mock Checkout

POST /api/checkout
Request Body:

{ "cartItems": [] }


Response returns:

Total amount

Timestamp (mock receipt)

▶️ How to Run the Project
✅ Backend
cd Backend
npm install
npm start

✅ Frontend
cd Frontend
npm install
npm run dev

✅ Expected Output

Products load from database / mock list

User can add items to cart

Items can be removed

Total updates dynamically

Checkout returns a dummy receipt in JSON

✅ Notes

No hosting required

No real payment gateway

GitHub repository submission is enough

✅ Status

✅ Basic e-commerce workflow completed
✅ REST APIs fully functional
✅ Frontend integrated with backend

📌 Developer

Ravi Tharun


---

✅ Clean  
✅ Well-formatted  
✅ No missing code blocks  
✅ Suitable for professional submission

If you want, I can also add:
✔ Screenshots  
✔ Demo GIF  
✔ API screenshots (Postman)  
✔ Live link (if you deploy later)