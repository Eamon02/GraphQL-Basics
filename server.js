const express = require('express');
const app = express();
const expressGraphQL = require('express-graphql').graphqlHTTP;

app.use(
	'/graphql',
	expressGraphQL({
		graphiql: true,
	})
);
app.listen(5000, () => console.log('sever is running'));
