# JustAcademy Remastered Web

A modern, responsive web application for JustAcademy – India’s leading iOS training institute with 100% job placement assistance.

---

## 🚀 Project Overview

JustAcademy Remastered Web is a React-based platform for promoting iOS, Swift, and mobile app development courses. It features:

- Course details and curriculum
- Free demo class registration
- Contact and query forms (with MySQL backend and EmailJS support)
- Student testimonials and placement info
- Clean, mobile-friendly UI with Tailwind CSS & shadcn-ui

---

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, shadcn-ui
- **Backend:** Node.js, Express (for API & MySQL integration)
- **Database:** MySQL
- **Email:** EmailJS (for direct email from forms)
- **Deployment:** Netlify (frontend), Render/Railway/Heroku (backend)

---

## 📦 Getting Started

### Prerequisites

- Node.js & npm
- MySQL (if using backend)
- [EmailJS account](https://www.emailjs.com/) (for email notifications)

### Setup

```bash
# 1. Clone the repository
git clone <YOUR_GIT_URL>
cd just-academy-remastered-web

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

### Backend (Optional)

If you want to store form data in MySQL:

1. Set up your MySQL database and tables.
2. Configure your backend (`server.cjs`) with your DB credentials.
3. Start the backend server:

   ```bash
   node server.cjs
   ```

---

## 🌐 Deployment

- **Frontend:** Deploy to [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).
- **Backend:** Deploy to [Render](https://render.com/), [Railway](https://railway.app/), or [Heroku](https://www.heroku.com/).
- **Update API URLs:** Make sure your frontend uses the deployed backend URL.

---

## ✉️ Email Integration

- Configure [EmailJS](https://www.emailjs.com/) for instant email notifications from forms.
- Update your EmailJS Service ID, Template ID, and Public Key in the form components.

---

## 📄 License

This project is for educational and demonstration purposes.

---

## 👨‍💻 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📞 Contact

- **Website:** [justacademy.co](https://www.justacademy.co/)
- **Email:** info@justacademy.co

---

*Built with ❤️ by the JustAcademy Team*
