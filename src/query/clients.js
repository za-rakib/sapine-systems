import { gql } from '@apollo/client';

export const CLIENTS = gql`
    query Clients {
        clients {
            data {
                name, updatedAt
            },
            totalRecords,
        }
    }
`;

export const CREATE_CLIENT = gql`
  mutation CreateClient($name: String!, $email: String!, $number: String) {
  createClient(name: $name, email: $email, number: $number) {
    name
  }
}
`;