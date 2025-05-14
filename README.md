# 📝 Shared Wishlist App

A real time collaborative wishlist app where multiple users can create, manage, and interact with shared wishlists perfect for group shopping plans, events, or gift planning.


## 📂 Repository
[GitHub - umeshyadav7988/Shared-Wishlist-App](https://github.com/umeshyadav7988/Shared-Wishlist-App.git)

---

## 📧 Contact
**Umesh Yadav**  
📧 Email: umeshyadav7988@gmail.com

---

## 🛠 Tech Stack

### Frontend (React)
- React.js
- Axios
- React Router
- Context API 
- CSS 

### Backend (Node.js/Express)
- Node.js
- Express.js
- Bcrypt 

### Database
- MongoDB (with Mongoose)

---

## ✨ Features

## 📸 Screenshots

### 🔐 Signup Page
![Signup Page](![Screenshot (494)](https://github.com/user-attachments/assets/d84322ce-8a39-4340-85e2-0d5ac10983d2)
![Screenshot (493)](https://github.com/user-attachments/assets/897ac9c7-b971-442b-ad16-26af89801f3e)


### ➕ Create Wishlist
![Create Wishlist](![Screenshot (495)](https://github.com/user-attachments/assets/55b6dcbf-d94f-454e-9c90-a3c0b58eaf6d)

### 🛒 Edit Product
![Edit Product](./screenshots/product-edit.png)
![Screenshot (496)](https://github.com/user-attachments/assets/ec422005-6bcd-41c9-a761-e40088266ea8)
![Screenshot (497)](https://github.com/user-attachments/assets/aad225fe-eaf4-46d9-a681-969d8cd32d4c)


### 🔐 Authentication
- User Signup & Login

### 🧾 Wishlist Management
- Create new wishlists
- Add, edit, delete products
  - Each product includes: name, image URL, price
  - Shows who added/edited the item
- Invite users to a wishlist (mocked via placeholder)
- View wishlists shared with you

### ⚡ Real-time Sync 
- Real-time updates across users using WebSockets (Socket.IO)

---

##  Getting Started

### ✅ Prerequisites
- Node.js
- MongoDB (local or cloud e.g. MongoDB Atlas)

### 🧪 Installation

1. **Clone the repo**

```bash
git clone https://github.com/umeshyadav7988/Shared-Wishlist-App.git
cd Shared-Wishlist-App
````

2. **Install frontend and backend dependencies**

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

3. **Set environment variables**

> In `backend/.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

4. **Run the app**

```bash
# Start backend
cd backend
npm start

# Start frontend (in separate terminal)
cd frontend
npm start
```

---

## 📁 Folder Structure

```
Shared-Wishlist-App/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.js
└── README.md
```

---

## ⚖️ Assumptions & Limitations

* Invitation system is currently mocked and does not send actual emails.
* Reactions and comments are implemented as bonus features and may be limited in scope.
* Real-time sync is implemented using Socket.IO for MVP — may need optimization at scale.

---

## 📈 Future Improvements & Scalability Thoughts

* **Invite System:** Integrate email-based invitations using services like SendGrid or Firebase.
* **Scalability:** Use Redis for session and socket management across multiple servers.
* **Database Optimization:** Add indexing for faster query performance on user and wishlist lookups.
* **UI/UX:** Add animations and better mobile experience with PWA capabilities.
* **Access Control:** Implement role-based permissions per wishlist (owner, editor, viewer).
* **Cloud Hosting:** Deploy backend (e.g., on Render/Heroku) and frontend (e.g., Netlify/Vercel).

---

## 📃 License

MIT License — feel free to use and contribute!


