import { gql } from '@apollo/client';

const schema = {
  list: {
    name: 'company',
    serviceName: 'graphql',
    query: gql`
      query company($ids: [String], $title: String) {
        company(ids: $ids, title: $title) {
          data {
            id
            title
          }
          total
        }
      }
    `,
  },
};

export default schema;
