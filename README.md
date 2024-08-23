# 🚀 Mars Rover Project - Environment Setup

![GitHub repo size](https://img.shields.io/github/repo-size/kennys404/mars-rover?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/kennys404/mars-rover?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/kennys404/mars-rover?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/kennys404/mars-rover?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/kennys404/mars-rover?style=for-the-badge)



> This project simulates the movement of Rovers on Mars, receiving commands and positions. Here, you'll find the necessary instructions to set up the development environment and run the project.

## 💻 Prerequisites

Before starting, ensure you meet the following requirements:

- You have Node.js (version 16 or 17) installed via nvm
- You have Yarn installed on your system
- Docker is installed to facilitate running the project in containers
- The recommended operating system is Linux or macOS. Windows with WSL2 is also compatible.

## 🚀 Installing the Mars Rover Project

To install the Mars Rover project, follow these steps:

### Linux and macOS:

1️⃣ Verify and install the correct version of Node.js using nvm:

```bash
nvm install 16
nvm use 16
```

2️⃣ Install Yarn:

```bash
sudo apt update && sudo apt install curl
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn
```

Verify the installation:

```bash
yarn --version
```

3️⃣ Install the project dependencies:

Frontend:

```bash
cd frontend
yarn install
```

Backend:

```bash
cd ../backend
yarn install
```

## ☕ Using the Mars Rover Project

### ▶️ Running Individually

4️⃣ To run the frontend:

```bash
cd frontend
yarn serve
```

Access the frontend at: `http://localhost:8080`

5️⃣ To run the backend:

```bash
cd ../backend
yarn start
```

The backend will be available on the configured port (e.g., `http://localhost:3000`)

### 🐳 Running with Docker

6️⃣ To run both projects using Docker, execute the following in the root of the project:

```bash
docker compose up -d
```

The application will be accessible at: `http://localhost:8000`
