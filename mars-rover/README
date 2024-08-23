# Verify and install the correct version of Node.js using nvm
# If you don't have nvm installed, follow the installation instructions on the official repository: https://github.com/nvm-sh/nvm
nvm install 16
nvm use 16

# Make sure you're using the correct version of Yarn
# On Ubuntu, it's recommended to install Yarn via its official repository to ensure you have the latest stable version:
sudo apt update && sudo apt install curl
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn

# Verify the Yarn installation:
yarn --version

# Now, install the frontend dependencies
cd frontend
yarn install

# Install the backend dependencies
cd backend
yarn install

# To run the projects individually, follow the steps below:

# 1. Running the Frontend:
# Make sure you are in the 'frontend' folder
cd frontend
# Start the frontend server using Yarn
yarn serve

# The frontend will be available at: http://localhost:8080 (or the port configured)

# 2. Running the Backend:
# Make sure you are in the 'backend' folder
cd backend
# Start the backend server using Yarn
yarn start

# The backend will be available on the port specified in your project (e.g., http://localhost:8000)

# If you prefer to run both projects using Docker, simply return to the project root and execute:
cd ..
docker compose up -d

# After running Docker or individually, you can access the application in your browser via:
http://localhost:8000
