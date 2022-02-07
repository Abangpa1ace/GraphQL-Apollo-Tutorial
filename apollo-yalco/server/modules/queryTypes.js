const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    equipments: [Equipment]
    equipmentAdvs: [EquipmentAdv]
    roles: [RoleItem]
    role(id: ID): RoleItem
    supplies: [Supply]
    softwares: [Software]
    software: Software
    teams: [Team]
    team(id: ID): Team
    people: [People]
    peopleFiltered(
      team: Int
      sex: Sex
      blood_type: BloodType
      from: String
    ): [People]
    peoplePaginated(page: Int!, per_page: Int!): [People]
    person: People
    givens: [Given]
  }
`;

module.exports = typeDefs;
