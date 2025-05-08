# Spill the Tea 🤫

[![Azure DevOps](https://img.shields.io/badge/Deployed%20via-Azure%20DevOps-blue)](https://dev.azure.com/Junaid-Arif/Spill%20the%20Tea)
[![Azure App Service](https://img.shields.io/badge/Hosted%20on-Azure%20App%20Service-brightgreen)](https://spill-the-tea-eng7fgg8b2gjhjaw.canadacentral-01.azurewebsites.net/)

This repository contains the source code for **Spill the Tea**, a fun, modern web app that fetches anonymous secrets using the **[Secrets API](https://secrets-api.appbrewery.com/)**. Users can explore random secrets shared by others, inspired by the popular Lisper app. The project emphasizes building **RESTful API integrations**, handling **dynamic content rendering**, and creating a clean, responsive UI.

---

## 🖥️ Live Website

👉 **[Spill the Tea](https://spill-the-tea-eng7fgg8b2gjhjaw.canadacentral-01.azurewebsites.net/)** _(Hosted on Microsoft Azure)_  
👉 **[Azure DevOps Project](https://dev.azure.com/Junaid-Arif/Spill%20the%20Tea)**

---

## 🎯 Purpose

**Spill the Tea** was created to deepen my understanding of:

- Building **full-stack web apps** using **Node.js**, **Express**, and **EJS**.
- Making **RESTful API requests** from a server-side app.
- Structuring API **endpoints** and handling **JSON responses**.
- Reading and applying **API documentation** to understand endpoints, parameters, and response structures.
- Using **Axios** for promise-based HTTP requests.
- Applying **asynchronous programming** concepts like `async/await` and **promises**.
- Passing dynamic data from **server-side to EJS views**.
- Designing a clean, responsive UI with **CSS Flexbox** and **media queries**.
- Deploying apps using **Azure App Service** and **Azure DevOps** CI/CD pipelines.
- Laying the groundwork for **future user authentication (OAuth 2.0)** integrations.

---

## 🛠️ Features

- **Random Secret Fetching**: Retrieves a new secret and its author from the external **Secrets API** every time the page loads or the button is clicked.
- **Dynamic Server-Side Requests**: Uses **Axios** to request data and updates the page with **EJS** templating.
- **No Authentication (Yet)**: For now, no authentication is required for API use — this will be explored in future versions using **Google OAuth 2.0**.
- **Responsive Design**: Flexible, mobile-friendly design that adapts across device sizes.
- **Interactive UI Effects**: Secrets are revealed interactively with hover effects and mobile-optimized adjustments.
- **Dynamic Footer**: Includes real-time year and social/contact links.

---

## 💻 Technologies Used

- **Node.js** — Server runtime.
- **Express** — Web framework.
- **EJS** — Templating engine for dynamic content.
- **Axios** — For making HTTP requests.
- **Body-Parser** — Middleware for parsing form data.
- **HTML5 / CSS3** — Front-end layout and styling.
- **JavaScript (client-side)** — To handle touch interactions.
- **Microsoft Azure App Service** — Hosting platform.
- **Azure DevOps** — For CI/CD and repository management.
- **GitHub** — Source control and collaboration.

---

## 🧠 What I Learned

- Structuring **RESTful API requests** and understanding **endpoint design**.
- Reading and applying **API documentation** effectively.
- Handling **server-side API requests** using **Axios** and understanding the **request/response lifecycle**.
- Implementing **async/await** patterns for efficient asynchronous programming.
- Rendering dynamic content with **EJS**, including passing and rendering server-side data.
- Optimizing **responsive design** with media queries and UI effects.
- Managing **touch-specific behaviors** for mobile devices.
- Building **CI/CD pipelines** with Azure DevOps.
- Deploying full-stack applications seamlessly to **Azure App Service**.

---

## 🚀 Deployment & Workflow

The app is deployed to **Microsoft Azure App Service** and integrated with **Azure DevOps** for continuous deployment.

### 🛠 Deployment Setup (Steps I Took)

1. **Created Azure App Service**

   - Set up a new App Service instance.

2. **Created GitHub Repo**

   - Initialized a new GitHub repository (`Spill-the-Tea`) and pushed all project files.

3. **Created Azure DevOps Project**

   - Created a new project in Azure DevOps named _Spill the Tea_.

4. **Added Azure DevOps as Git Remote**

   ```bash
   git remote add azure https://Junaid-Arif@dev.azure.com/Junaid-Arif/Spill%20the%20Tea/_git/Spill%20the%20Tea
   git push azure main
   ```

5. **Push to Both Remotes**

   ```bash
   git push origin main   # GitHub
   git push azure main    # Azure DevOps triggers deployment
   ```

6. **Linked Azure DevOps to App Service**

   - Configured Deployment Center in Azure App Service to pull from Azure DevOps.

7. **Tested CI/CD**

   - Confirmed that commits to Azure DevOps trigger automatic deployments.

8. **Port Configuration**

   ```javascript
   const port = process.env.PORT || 3000;
   ```

---

### 🔥 Deployment Workflow (Current)

```bash
git add .
git commit -m "Your commit message"
git push origin main   # Updates GitHub
git push azure main    # Updates Azure DevOps & deploys automatically
```

---

## 🤝 Contribution

This project was built for learning and portfolio purposes, but feel free to fork the repository and submit pull requests if you'd like to propose new features or improvements. Thank you!

---

## 📄 License

This project is open-source and available for personal use, learning, and modification.

---

## 🔗 Credits

- **Secrets API** — [secrets-api.appbrewery.com](https://secrets-api.appbrewery.com/) — powering the anonymous secrets feature.
- Inspired by the **Whisper App** for anonymous, community-shared secrets.
- Design inspired by minimalist, interactive, and mobile-responsive UI best practices.
