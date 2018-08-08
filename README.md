# create-graphql-service

## Install
```
npm install --save @orikami/create-graphql-service
```

### Usage


Due to some package troubles, you need to install `apollo-server-micro`
and `graphql` in your microservice (root) `package.json`

```bash
npm install --save graphql apollo-server-micro
```

Now you can write a micro function in `index.js`:

```javascript
const createGraphQLService = require("./packages/create-graphql-service");
const apolloServer = require("apollo-server-micro");
const schema = require("./schema");

module.exports = createGraphQLService({ schema, apolloServer, name: "graphql-demo", version: "v1" });
```

This will create endpoints:

- `/v1/graphql-demo/graphql`
- `/v1/graphql-demo/grapihql`

For more information about development and release, [see documentation](../../README.md).
