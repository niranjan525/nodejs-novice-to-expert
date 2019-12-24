const { ApolloServer, gql } = require('apollo-server');
const axios = require('axios');
const resolverUrlTodo = 'http://localhost:8001/todos';
const resolverUrlPost = 'http://localhost:8001/posts';


// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type User {
    id: Int
    name: String
    username: String
    email: String
  }

  type Post {
    id: Int
    userId: Int
    title: String
    body: String
  }

  type Comment {
    postId: Int
    id: Int
    name: String
    email: String
    body: String
  }


  type Todo   {
    userId: Int
    id: Int
    title: String
    completed: Boolean
  }

  type PostAndComments {
    post: Post
    comments: [Comment]
  }


  type Query {
    todo (userId: Int!, completed: Boolean): [Todo]

    postAndComments (postId: Int, userId: Int!): [PostAndComments]

  }

  type Mutation {
    updateTodo(userId: Int!, id: Int!, completed: Boolean!): Todo
  }

`;

const resolvers = {
  Query: {
    todo: async (parent, args, context, info) => {
      const url = args.completed ? resolverUrlTodo + "?userId=" + args.userId + "&" + "completed=" + args.completed :
        resolverUrlTodo + "?userId=" + args.userId;
      console.log("url => ", url)
      const result = await axios.get(url)
      return result.data
    },

    postAndComments: async (parent, args, context, info) => {
      let url = resolverUrlPost + "?_embed=comments&"
      if (args.postId) {
        url = url + "userId=" + args.userId + "&" + "id=" + args.postId;
      }
      else {
        url = url + "id=" + args.userId;
      }

      console.log("url => ", url)
      let result = await axios.get(url)
      result = result.data

      return result.map(item => ({
        post: {
          userId: item.userId,
          id: item.id,
          title: item.title,
          body: item.body
        },
        comments: item.comments
      }))
    }
  },

  Mutation: {
    updateTodo: async (parent, args, context, info) => {
      const getUrl = resolverUrlTodo + "?id=" + args.id + "&userId=" + args.userId;
      const putUrl = resolverUrlTodo + "/" + args.id;

      console.log(`get => ${getUrl} put => ${putUrl}`);

      let result = await axios.get(getUrl);
      result = result.data[0];
      console.log("Result receieved:", result);

      delete result.id;
      result.completed = args.completed;
      console.log("To Update:", result);
      result = await axios({
        method: 'put',
        url: putUrl,
        data: result
      });
      console.log("after update => ", result);
      return result.data;
    }
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});


