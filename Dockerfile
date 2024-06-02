# Use the official Node.js 18 image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the ports for both the Next.js app and the Express.js server
EXPOSE 3000
EXPOSE 3001

# Start both the Next.js app and the Express.js server
CMD ["npm", "run", "dev"]
