const { gql } = require("apollo-server");

const typeDefs = gql`
  type Mutation {
    addEquipment(
      id: String
      used_by: String
      count: Int
      new_or_used: String
    ): Equipment

    editEquipment(
      id: String
      used_by: String
      count: Int
      new_or_used: String
    ): Equipment

    deleteEquipment(id: ID!): Equipment

    deleteSupply(id: ID!): Supply

    postTeam(input: PostTeamInput!): Team
    editTeam(id: ID!, input: PostTeamInput!): Team
    deleteTeam(id: ID!): Team

    postPerson(input: PostPersonInput): People
  }
`;

module.exports = typeDefs;
