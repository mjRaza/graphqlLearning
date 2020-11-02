var { buildSchema } = require("graphql");

var userschema = buildSchema(`

type User{
    id:ID,
    name:String,
    email:String
}
type Query {
    Users: [User]
    UserById(id:ID!):User
    }

type Mutation{
    createUser(name:String!,email:String!):User
}

`);

module.exports = userschema;


// type User => nothing but a normal type for the user =>go and make a resolver for that now
//type Query => all the routes that will be available will come here.=>go and make a resolver for that now
