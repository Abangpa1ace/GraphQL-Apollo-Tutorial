const { gql } = require("apollo-server");

const typeDefs = gql`
  enum Role {
    developer
    designer
    planner
  }
  enum NOU {
    new
    used
  }
`;

module.exports = typeDefs;
