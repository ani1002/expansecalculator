FROM node:18-alpine

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install all dependencies (including devDeps for Vite)
RUN npm install

# Copy the rest of the frontend source code
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Start Vite with --host to allow external access
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]