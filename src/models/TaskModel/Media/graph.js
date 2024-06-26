import { gql } from '@apollo/client';

const schema = {
  current: {
    name: 'task',
    serviceName: 'graphql',
    query: gql`
      query task($ids: [String]) {
        task(ids: $ids) {
          data {
            media {
              id
              name
              full_url
              size
              collection_name
            }
          }
        }
      }
    `,
  },
};

export default schema;
