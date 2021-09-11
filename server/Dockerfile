FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

ENV MONGO_URL=mongodb+srv://Shreshtha_321:y5rcjEskx3g4VLxY@food-master.a9vkb.mongodb.net/foodstar?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID=622952223859-mqc2pbqg690a5gmj6i3cnnkknpvmb9ui.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=_ROue0E0m9cfiC6bLEJ6iMCz
ENV RZR_PAY_ID=rzp_test_e6LKncsystbaiU
ENV RZR_PAY_SECRET=MHdAwlbdqlCJlFW4kKrbk4kT

CMD ["npm", "run", "start"] 