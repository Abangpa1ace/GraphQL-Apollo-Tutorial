const { ApolloServer, gql } = require("apollo-server");

const queries = require("./modules/queryTypes");
const mutations = require("./modules/mutationTypes");
const enums = require("./types/enums");
const equipments = require("./modules/equipments");
const supplies = require("./modules/supplies");

const modules = [equipments, supplies];

const typeDefs = [queries, mutations, enums, modules.map((m) => m.typeDefs)];
const resolvers = modules.map((m) => m.resolvers);

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
