FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY  . .

# This command builds the SvelteKit app, outputting to .svelte-kit/output
RUN npm run build

FROM builder AS  dev

EXPOSE 5173

CMD ["npm","run","dev","--","--host","0.0.0.0"]

FROM node:22-alpine AS prod

WORKDIR /app

# Copy the built SvelteKit server code and static assets
COPY --from=builder /app/.svelte-kit/output .

# We need to copy the node_modules folder from the builder stage because the production
# server still relies on packages listed as devDependencies, such as @sveltejs/kit.
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 4173

# The `npm start` command is the standard way to run a production
# Node.js application. It is configured in your package.json file.
CMD ["npm", "start"]
