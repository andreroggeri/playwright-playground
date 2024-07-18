FROM node:20

# Copy and install deps

WORKDIR /app

COPY package*.json ./

RUN npm ci

RUN npx playwright install --with-deps

# Copy the rest of the files

COPY . .

# Run tests

CMD ["npm", "run", "test"]
