# 🎓 Smart Face Recognition Attendance System

A full-stack Face Recognition–based Attendance System that automatically identifies students using a webcam and records attendance in MongoDB.

---

## 🚀 Features
- Face recognition using Machine Learning
- Real-time attendance marking via webcam
- MongoDB database integration
- Flask-based ML service
- Node.js backend API
- React frontend UI
- Automatic date & time logging

---

## 🧠 Tech Stack

**Frontend**
- React.js
- Axios

**Backend**
- Node.js
- Express.js

**ML Service**
- Python
- Flask
- OpenCV
- face_recognition

**Database**
- MongoDB Atlas

---

## 📁 Project Structure


face attendence/
│
├── frontend/ # React UI
├── backend/ # Node.js server
├── ml-service/
│ └── attendance_app/ # Flask + ML logic
├── dataset/ # Student face images
├── README.md
└── .gitignore


---

## ⚙️ How It Works

1. Student face images are stored in the dataset folder
2. Flask ML service loads known face encodings
3. Webcam captures live image
4. Face is matched with dataset
5. Attendance is stored in MongoDB
6. Result is returned to frontend via backend API

---

## ▶️ How to Run the Project

### 1️⃣ Start ML Service
```bash
cd ml-service/attendance_app
python app.py

2️⃣ Start Backend Server
cd backend
node server.js

3️⃣ Start Frontend
cd frontend
npm start
➕ Add New Student

Go to dataset/

Create a new folder with student name
Example:

dataset/1_Mallidi_Sscvv_RamaKrishna_Reddy/


Add 5–10 clear face images

Restart ML service

🗄️ View Attendance Data

Login to MongoDB Atlas

Open your cluster

Database → Collection → attendance_records

🎯 Use Cases

Colleges & Universities

Schools

Secure attendance systems

AI-based student monitoring

👨‍💻 Developed By

Mallidi SSCVV RamaKrishna Reddy
B.Tech – Artificial Intelligence & Data Science

⭐ Future Enhancements

Admin dashboard

Cloud deployment

Mobile app integration

Liveness detection