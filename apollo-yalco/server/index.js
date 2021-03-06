const { ApolloServer, gql } = require("apollo-server");

const queries = require("./modules/queryTypes");
const mutations = require("./modules/mutationTypes");
const enums = require("./types/enums");
const equipments = require("./modules/equipments");
const supplies = require("./modules/supplies");
const softwares = require("./modules/softwares");
const roles = require("./modules/roles");
const teams = require("./modules/teams");
const people = require("./modules/people");
const givens = require("./modules/givens");
const tools = require("./types/tools");

const modules = [equipments, supplies, softwares, people, givens, tools, roles, teams];

const typeDefs = [queries, mutations, enums, modules.map((m) => m.typeDefs)];
const resolvers = modules.map((m) => m.resolvers);

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
