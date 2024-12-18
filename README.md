# 🌟 Fund Star

**Project Purpose**  
Fund Star is a web application designed to simplify the process of creating, managing, and supporting campaigns. Whether it's a personal need, a startup idea, or a charitable cause, Fund Star empowers users to make a difference. The platform allows campaign organizers to manage their projects while providing a seamless experience for donors.

## 🌐 Live URL
[Fund Star](https://fundstar.netlify.app/)
[Fund Star Server](https://fund-star-server.vercel.app/)

## 🛠 Technologies Used
* React.js
* React Router
* Tailwind CSS
* Firebase Authentication
* React Icons
* SweetAlert2

## 🚀 Key Features
1. **Secure User Authentication**
   * Login and registration with Firebase
   * Protected routes for secure user data access

2. **Campaign Management**
   * Users can create, update, and delete campaigns
   * All campaigns displayed in a responsive card layout

3. **My Donations Section**
   * View all the campaigns a user has contributed to

4. **Dynamic Dashboard**
   * Real-time data updates for campaigns and donations

5. **User-Friendly Interface**
   * Clean, responsive design with animations for a polished experience

## 📦 NPM Packages Used

**Core Dependencies**
* `react`: Frontend library
* `react-router-dom`: For routing and navigation
* `firebase`: Authentication and backend services
* `sweetalert2`: Elegant alert popups

**Styling**
* `tailwindcss`: Utility-first CSS framework
* `react-icons`: Library for scalable icons

**Development Tools**
* `vite`: Fast frontend build tool

## 🚀 Getting Started

### Prerequisites
* Node.js (v16 or later)
* Firebase Account

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up Firebase configuration:
   * Create a Firebase project
   * Copy your Firebase configuration details
   * Create a `.env` file with the following variables:
```env
VITE_apiKey=
VITE_authDomain=
VITE_projectId=
VITE_storageBucket=
VITE_messagingSenderId=
VITE_appId=
```

3. Start the development server:
```bash
npm run dev
```

## 📂 Project Structure
```
src/
├── components/
│   ├── Header.jsx
│   └── MainLayout.jsx
├── firebase/
│   └── firebase.js
├── layouts/
│   └── MainLayout.jsx
├── pages/
│   ├── About.jsx
│   ├── AddNewCampaign.jsx
│   ├── AllCampaigns.jsx
│   ├── DetailsPage.jsx
│   ├── ErrorPage.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── MyCampaigns.jsx
│   ├── MyDonations.jsx
│   ├── Register.jsx
│   ├── RunningCampaigns.jsx
│   ├── UpdateCampaign.jsx
│   └── WhyUs.jsx
├── provider/
│   └── AuthProvider.jsx
├── routes/
│   ├── PrivateRoute.jsx
│   └── routes.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## 🔐 Authentication
* Firebase Authentication is used for:
   * Email/Password login and signup
   * User profile management
   * Access control for protected routes

## 🎨 Design Philosophy
* Mobile-first, responsive design
* Accessible for all users
* Interactive and intuitive user experience

## 📧 Contact
**Md. Abdul Wahab** - abdulwahab22400@gmail.com

## 🙏 Acknowledgements
* React.js
* Tailwind CSS
* Firebase
* React Icons
* SweetAlert2