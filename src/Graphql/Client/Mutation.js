import { gql } from "@apollo/client";

export const ADD_CLIENT = gql`
  mutation addClient(
    $name: String
    $email: String!
    $number: String
    $status: String
    $source: String
  ) {
    addClient(
      client: {
        name: $name
        email: $email
        number: $number
        status: $status
        source: $source
      }
    ) {
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

export const UPDATE_CLIENT = gql`
  mutation updateClient(
    $id: String!
    $name: String
    $email: String
    $number: String
    $status: String
    $source: String
  ) {
    updateClient(
      id: $id
      client: {
        name: $name
        email: $email
        number: $number
        status: $status
        source: $source
      }
    ) {
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

export const DELETE_POST = gql`
  mutation deleteClient($id: String!) {
    deleteClient(id: $id)
  }
`;
