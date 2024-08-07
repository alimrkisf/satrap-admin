import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'siteType',
    serviceName: 'graphql',
    query: gql`
      query siteType($ids: [String]) {
        siteType(ids: $ids) {
          data {
            id
            title
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
  update: {
    name: 'updateSiteType',
    serviceName: 'admin',
    query: gql`
      mutation updateSiteType($ids: [String]!) {
        updateSiteType(ids: $ids) {
          messages
        }
      }
    `,
  },
};

export default schema;
