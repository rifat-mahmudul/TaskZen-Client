# 📌 Task Management Application

![Task Management App](https://img.shields.io/badge/MERN-Stack-blue.svg)
![Firebase](https://img.shields.io/badge/Firebase-Authentication-yellow.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

🚀 **Live Demo:** [Task Management App](https://task-management-e21ba.web.app)

---

## 📖 Overview
The **Task Management Application** allows users to efficiently manage their tasks using a **drag-and-drop** interface. Tasks are categorized into three sections: **To-Do, In Progress, and Done**. Users can add, edit, delete, and reorder tasks, ensuring a smooth and interactive experience.

## ✨ Features
✅ **Authentication:** Secure Google Sign-in using Firebase Authentication.  
✅ **Task Management:** Add, edit, delete, and reorder tasks with real-time updates.  
✅ **Drag & Drop:** Move tasks between categories using a smooth drag-and-drop interface.  
✅ **Persistence:** Data is stored in **MongoDB** via an **Express.js backend**.  
✅ **Modern UI:** A clean, minimal, and fully responsive design.  
✅ **Mobile-Friendly:** Optimized for both desktop and mobile users.  
✅ **Dark Mode (Bonus):** Toggle between light and dark mode for a better user experience.  
✅ **Due Dates (Bonus):** Tasks highlight overdue items in red.  
✅ **Activity Log (Bonus):** Track task movement and updates.

---

## 🛠️ Technologies Used
### **Frontend:**
- ⚡ **React (Vite.js)** – Fast, efficient frontend framework
- 🔄 **@hello-pangea/dnd** – Drag-and-drop functionality
- 🔥 **Firebase Authentication** – Google sign-in
- 🎨 **Tailwind CSS** – Modern styling
- 🏗 **React Hook Form** – Form handling
- ⚛ **React Query** – Data fetching and caching
- 🚀 **React Hot Toast** – Beautiful notifications

### **Backend:**
- 🏗 **Node.js & Express.js** – REST API server
- 🗄 **MongoDB & Mongoose** – Database management
- 🔍 **Axios** – HTTP requests

---

## 📦 Dependencies
```json
"@hello-pangea/dnd": "^18.0.1",
"@tanstack/react-query": "^5.62.11",
"aos": "^2.3.4",
"axios": "^1.7.9",
"firebase": "^11.1.0",
"react": "^18.3.1",
"react-dom": "^18.3.1",
"react-fast-marquee": "^1.6.5",
"react-helmet-async": "^2.0.5",
"react-hook-form": "^7.54.2",
"react-hot-toast": "^2.5.2",
"react-icons": "^5.4.0",
"react-router": "^7.1.1",
"react-spinners": "^0.15.0"
```

---

## 🚀 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/task-management.git
cd task-management
```

### **2️⃣ Backend Setup**
```sh
cd backend
npm install
npm start
```

> **Note:** Ensure MongoDB is running locally or configure a cloud database.

### **3️⃣ Frontend Setup**
```sh
cd frontend
npm install
npm run dev
```

> The frontend will be available at `http://localhost:5173/`

---

## 🔌 API Endpoints
| Method | Endpoint        | Description |
|--------|---------------|-------------|
| **POST** | `/tasks` | Add a new task |
| **GET** | `/tasks` | Retrieve all tasks for the logged-in user |
| **PUT** | `/tasks/:id` | Update task details (title, description, category) |
| **DELETE** | `/tasks/:id` | Delete a task permanently |

---

## 📜 License
This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it!

---

## 🙌 Acknowledgments
Special thanks to **React, Firebase, MongoDB, Express.js, and Vite.js** for making this project possible! 🎉

---

### 🚀 Happy Coding! 💻🎨
