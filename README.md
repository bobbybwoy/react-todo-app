# READ ME

This is a simple todo app based on a brief found [here](https://github.com/nology-tech/uk-documentation/blob/main/modules%2FReact%2F00-Resources%2FProjects%2F02-My-Todos%2Fbrief.md).

You can add todo items, check/uncheck them and delete them. You cannot add blank todo items.

This application uses a React frontend, an Express (Node) backend connecting to a MongoDB instance on MongoDB Atlas.

## Prerequisite(s)

You will need to create an account on MongoDB Atlas and to create a cluster and obtain the connection string, which will include the password, which you will need to keep safe.

## Install

Once the repo has been cloned, navigate to the `react-todo-app` folder, navigate to the `backend` folder and type in the following command:

```bash
npm install
```

You may want to install nodemon as an additional package, if you do not have it installed globally.

To install it as part of the application:

```bash
npm install nodemon
```

To install it globally:

```bash
npm install -g nodemon
```

Again, navigate to the `frontend` folder, and type in the following command:

```bash
npm install
```

In the `backend` folder, create a `.env` file, and the following details from the connection string you obtained from the prerequisites:

```
DB_USER = "<This should be user ID on MongoDB Atlas>"
DB_PASSWORD = "<This should be the password for cluster you created>"
DB_URL = "<This will be address of the cluster you created>"
```

## Running the application

### Start the application up:

In the `backend` folder, type in the following command, depending on whether you have it installed locally or global:

```bash
# Locally:
npx nodemon index.js

# Globally:
nodemon
```
In the `frontend` folder, type `npm run dev`. Once the application is running, cmd/ctrl-click or copy/paste the localhost link:

```
  VITE v8.0.2  ready in 2305 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Closing the application:

In the terminal running the frontend, type in `q` and press `enter` to stop the application. In the terminal running the backend, type `ctrl+c` to stop the application.