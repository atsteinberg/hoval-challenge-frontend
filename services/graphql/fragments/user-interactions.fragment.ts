import { gql } from '@apollo/client';

const userInteractionsFragment = gql`
  {
    id
    date
    interactionType
    message
  }
`;

export default userInteractionsFragment;
