# Use an official Nginx image to serve static files
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the application files from the local directory to the container
COPY . .

# Expose the port the app will run on
EXPOSE 80

# The default command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]
