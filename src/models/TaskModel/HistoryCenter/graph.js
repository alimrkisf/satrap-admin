import { gql } from '@apollo/client';

const schema = {
  get: {
    name: 'task',
    serviceName: 'auth',
    query: gql`
      query task($ids: [String]) {
        task(ids: $ids) {
          records {
            data {
              id
              status_timeline {
                id
                status {
                  title
                }
                user {
                  cellphone
                  firstname
                  lastname
                }
                created_at
                updated_at
              }
              driver {
                cellphone
                firstname
                lastname
              }
            }
          }
          all_tonnage
        }
      }
    `,
  },
};

export default schema;
