# DevTinder

DevTinder is a web application designed to connect developers with potential job opportunities and projects. It allows users to create profiles, showcase their skills, and match with companies or projects that align with their expertise.

## Features

- User authentication and profile management
- Skill tagging and search functionality
- Project and job listing
- Matching algorithm to connect users with relevant opportunities
- Real-time chat functionality
- Responsive design for mobile and desktop users

## Technologies Used

- Frontend: React, Redux, Tailwind CSS
- Backend: Node.js, Express, MongoDB
- Authentication: JWT, bcrypt
- Real-time communication: Socket.io
- Deployment: Docker, AWS

## AWS Frontend Deployment :

- Create new EC2 instance with Ubuntu Server
- Install Node.js and MongoDB
- Clone the DevTinder repository
- Install dependencies using `npm install`
- Start the server using `npm start`
- Configure security groups to allow HTTP and WebSocket traffic
- Set up a reverse proxy using Nginx to handle incoming requests
- Configure SSL using Let's Encrypt for secure connections

## AWS Backend Deployment :

- Allowed EC2 Instance Security Groups to allow listening on 3000 for backend
- npm install pm2 -g
- pm2 = Daemon process that runs 24 \* 7 in the background so that you can get rid of terminal
- pm2 start npm --start
- pm2 logs - check logs
- pm2 flush npm - Flush the logs
- pm2 list - List of processes
- pm2 stop `npm` - Stop process here npm is the name of the process
- pm2 delete `npm` - Delete the process npm
- pm2 start npm --name "DevTinder-Backend" -- start
- Update Nginx proxy pass to pass the API calls to localhost : 3000
- Restart Nginx - sudo systemctl restart nginx
- Check if the /api/feed works or not
