import { gql } from "@apollo/client";

export const getALLClient = gql`
  {
    getAllClient {
      id
      name
      email
      number
      status
      source
      createdAt
      updatedAt
    }
  }
`;
