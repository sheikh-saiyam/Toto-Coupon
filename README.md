# ToTo-Coupon - A Coupon Collecting Application 💸

**ToTo-Coupon is an intuitive and user-friendly platform designed to help users in Bangladesh find, collect, and utilize discount coupons from top e-commerce shops. With its clean interface and powerful features, users can save time and money while shopping online.**

## 🔗 [Live Website Link](https://saiyam-assignment9.netlify.app/)

## 🚀 Features

### 🔑 Authentication

- **Secure Login & Registration**: Email/Password-based authentication using Firebase.
- **Google Login**: Quick access via Google account.
- **Forget Password**: Reset your password with a simple process.

### 🛒 Coupon Management

- Browse and explore active coupons with details like discount percentage, expiry date, and terms.
- Copy coupon codes effortlessly using `react-copy-to-clipboard`.
- Navigate to brand websites for instant use.

### 🌟 Personalized Experience

- Welcome message with your name after login.
- Access a private dashboard with profile management.

### 🖌️ UI/UX Highlights

- Fully responsive design optimized for mobile, tablet, and desktop.
- Interactive animations using **AOS** or **Animate.css**.
- Error handling with toast notifications for all key actions.

### Data Highlights

- JSON-based dynamic mock data with properties like brand name, logo, rating, category, sale status, and coupons.

## 📄 Pages Overview

### 🏠 Home Page (`/`)

- **Banner**: A static slider with attractive, relevant visuals.
- **Top Brands**: Brand logos displayed using a smooth marquee with hover effects.
- **Brands on Sale**: Highlight brands currently offering sales with cards showing details like category and total coupons.
- **Custom Sections**: Additional user-defined sections for showcasing more content.

### 📋 Brands Page (`/brands`)

- A searchable and filterable list of all brands displayed as cards.
- Each card features brand details and dynamic actions like viewing coupons and checking sales.

### 🔐 Authentication System

- **Login Page**:
  - Email/password form with validation and error handling.
  - Google Login option for quick access.
  - Password reset functionality.
- **Registration Page**:
  - Form with fields for Name, Email, Profile Picture URL, and Password.
  - Real-time password validation (uppercase, lowercase, minimum length).

### 🎟️ Coupon Page (`/brand/:id`) _(Private Route)_

- Displays brand details such as logo, rating, and active coupons.
- Coupons are displayed in a grid format, each with:
  - Coupon description and expiry date.
  - **Copy Code**: Uses `react-copy-to-clipboard` for copying coupon codes.
  - **Use Now**: Redirects users to the brand's official site in a new tab.

### 👤 My Profile (`/my-profile`) _(Private Route)_

- Stylish profile page displaying user information.
- Update feature for Name and Profile Picture.

## ⚙️ JSON Data Structure

```json
[
  {
    "_id": "1",
    "brand_name": "Brand",
    "rating": 4.8,
    "description": "Top-rated e-commerce platform.",
    "brand_logo": "logo-url",
    "shop_Link": "https://brand-x.com",
    "category": "Fashion",
    "isSaleOn": true,
    "coupons": [
      {
        "coupon-code": "FASHION20",
        "description": "20% off on all fashion items.",
        "expiry-date": "2025-01-31",
        "condition": "No minimum purchase required.",
        "cupon_type": "Flat"
      }
    ]
  }
]
```

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, Firebase Authentication.
- **State Management**: React Context API.
- **Hosting**: Netlify.

## 📦 NPM Packages

- **React Router**: For dynamic routing.
- **React Toastify**: For notifications.
- **React Fast Marquee**: For brand logo scrolling.
- **React Copy to Clipboard**: For copying coupon codes.
- **AOS (Animate on Scroll)**: For animations.

<!-- ## 📸Home Page (`/`) Image

![Project Image](https://i.ibb.co.com/ZKJ4bzw/saiyam-assignment9-netlify-app.png)

## 📸Brands Page (`/brands`) Image

![Project Image](https://i.ibb.co.com/MZVy1vz/saiyam-assignment9-netlify-app-brands.png) -->


## ⚙️ Installation & Setup  

**1. Clone the repository**:  
```
git clone https://github.com/sheikh-saiyam/Toto-Coupon.git
cd Toto-Coupon
```

**2. Install dependencies:**
```
npm install
```

**3. Set up environment variables in .env.local**
```
apiKey: import.meta.env.VITE_apiKey,
authDomain: import.meta.env.VITE_authDomain,
projectId: import.meta.env.VITE_projectId,
storageBucket: import.meta.env.VITE_storageBucket,
messagingSenderId: import.meta.env.VITE_messagingSenderId,
appId: import.meta.env.VITE_appId,
```

**4. Start the development:**
```
npm run build
```
