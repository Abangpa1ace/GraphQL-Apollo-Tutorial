const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    equipments: [Equipment]
    equipmentAdvs: [EquipmentAdv]
    roles: [Role]
    role: Role
    supplies: [Supply]
    softwares: [Software]
    software: Software
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
