# NGO Installment Manager

> Simple Node.js service for basic user authentication and installment management (work-in-progress).


## Features

- Register users 
- Login with phone & password
- Lightweight, dependency-free token validation placeholder

## Prerequisites

- Node.js 18+ (or a recent LTS)
- npm

## Install

Clone the repo and install dependencies:

```bash
git clone <repo-url>
cd installment-manager
npm install
```

## Environment

The app reads a few environment variables (via `dotenv`). Defaults are provided in `config/config.js`.

- `HOST` — hostname (default: `localhost`)
- `PORT` — port (default: `3000`)

Create a `.env` file at the project root to override values, for example:

```
HOST=localhost
PORT=3000
```

## Run

Start the server (uses `nodemon` for development):

```bash
npm run start
```

By default the API is mounted at `/api/v1`. When running locally the server prints the listen URL.

## API Endpoints

- POST `/api/v1/auth/login`
  - Body: `{ "phone": "<phone>", "password": "<password>" }`
  - Response: 200 on success with user data.

- POST `/api/v1/auth/register`
  - Protected by `IsAuthenticated` middleware (expects an `Authorization: Bearer <token>` header). The project includes a placeholder token validator under `utils/jwt.js` that currently always accepts a token when present.
  - Body: `{ "name": "...", "email": "...", "phone": "...", "password": "..." }`
  - Response: 200 on success with stored users and token values.

Notes:
- Passwords are hashed with `bcrypt` before storage.

## Project Structure (selected)

- `app.js` — application entry and router mounting
- `config/config.js` — environment/config values
- `src/routes` — route definitions
- `src/handlers` — request handlers
- `src/services` — business logic (auth service)
- `src/dto` — simple request validators
- `utils/hash.js` — password hashing helpers
- `utils/jwt.js` — token validation placeholder


## License

ISC

---
Generated README for local development and documentation.
