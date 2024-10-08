import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'workshop',
    serviceName: 'graphql',
    query: gql`
      query workshop(
        $ids: [String]
        $title: String
        $alias: String
        $status_ids: [String]
        $manager_ids: [String]
        $is_active: Int
      ) {
        workshop(
          ids: $ids
          title: $title
          alias: $alias
          status_ids: $status_ids
          manager_ids: $manager_ids
          is_active: $is_active
        ) {
          data {
            id
            title
            manager {
              id
              firstname
              lastname
            }
            media {
              id
              full_url
            }
          }
          total
        }
      }
    `,
  },
};

export default schema;
