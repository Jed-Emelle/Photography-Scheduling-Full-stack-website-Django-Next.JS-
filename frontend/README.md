# Photography Scheduling Web Application

## Overview

The Photography Scheduling Web Application is a full-stack web application developed using **Python**, **Django**, and **Next.js**. It allows clients to schedule photography sessions online while enabling administrators to manage bookings through the Django Admin dashboard.

This project was developed as part of a school project : Backend Website development (with Python and Django) - **SOE 310**,  to demonstrate the use of the Django framework in building a real-world scheduling system.

---

## Features

* Book photography sessions online
* Select different photography services
* Store bookings in a SQLite database
* View recent bookings
* Prevent invalid bookings through backend validation
* Manage bookings using the Django Admin Panel
* Responsive user interface built with Next.js
* REST API built with Django REST Framework

---

## Technologies Used

### Backend

* Python
* Django
* Django REST Framework
* SQLite

### Frontend

* Next.js
* React
* Axios
* Tailwind CSS
* React Icons

### Version Control

* Git
* GitHub

---

## Project Structure

```
Photography Scheduling Web Application
│
├── appointments/
├── backend/
├── frontend/
├── manage.py
├── requirements.txt
├── db.sqlite3
└── .gitignore
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Jed-Emelle/Photography-Scheduling-Full-stack-website-Django-Next.JS-
```

### 2. Navigate into the project

```bash
cd photography-scheduling-web-app
```

### 3. Create a virtual environment

```bash
python -m venv venv
```

### 4. Activate the virtual environment

#### Windows

```bash
venv\Scripts\activate
```

#### macOS/Linux

```bash
source venv/bin/activate
```

### 5. Install backend dependencies

```bash
pip install -r requirements.txt
```

### 6. Run database migrations

```bash
python manage.py migrate
```

### 7. Start the Django server

```bash
python manage.py runserver
```

---

## Running the Frontend

Navigate to the frontend folder.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

The frontend will be available at:

```
http://localhost:3000
```

The backend API will be available at:

```
http://127.0.0.1:8000
```

---

## API Endpoint

| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| GET    | `/api/bookings/` | Retrieve all bookings |
| POST   | `/api/bookings/` | Create a new booking  |

> If your project uses `/api/appointments/` instead, replace `/api/bookings/` throughout this README.

---

## Admin Dashboard

The Django Admin Panel can be accessed at:

```
http://127.0.0.1:8000/admin/
```

Administrators can:

* View bookings
* Edit bookings
* Delete bookings
* Update booking status

---

## Photography Services

The application supports scheduling for services such as:

* Wedding Photography
* Birthday Photography
* Graduation Photography
* Family Portraits
* Corporate Photography
* Custom Photoshoots

---

## Future Improvements

* User authentication
* Email confirmation after booking
* Calendar integration
* Online payment system
* Booking availability calendar
* Search and filter bookings
* Image gallery for photographers

---

## Screenshots

Add screenshots of:

* Home Page
* Booking Form
* Recent Bookings
* Django Admin Dashboard

---

## Author

**Jed Emelle**

SOE 310 Project

Department of Software Engineering

---

## License

This project was developed for educational purposes.
