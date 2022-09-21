export const schema = gql`
  type AddEmp {
    id: String!
    name: String!
  }

  type Query {
    addEmps: [AddEmp!]! @skipAuth
    addEmp(id: String!): AddEmp @skipAuth
  }

  input CreateAddEmpInput {
    name: String!
  }

  input UpdateAddEmpInput {
    name: String
  }

  type Mutation {
    createAddEmp(input: CreateAddEmpInput!): AddEmp! @skipAuth
    updateAddEmp(id: String!, input: UpdateAddEmpInput!): AddEmp! @skipAuth
    deleteAddEmp(id: String!): AddEmp! @requireAuth
  }
`
