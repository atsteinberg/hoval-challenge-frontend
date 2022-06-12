import { gql } from '@apollo/client';

const deviceErrorFragment = gql`
  {
    id
    createdAt
    errorType
    message
    status
  }
`;

export default deviceErrorFragment;
