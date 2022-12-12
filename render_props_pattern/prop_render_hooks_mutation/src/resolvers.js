import gql from "graphql-tag";

export const ADD_MESSAGE = gql`
  mutation AddMessage($message: String!) {
    addMessage(message: $message) {
      message
    }
  }
`;
