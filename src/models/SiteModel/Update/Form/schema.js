const schema = () => ({
  type: 'object',
  required: [],
  properties: {
    title: {
      type: 'string',
      title: 'title',
    },
    manager_id: {
      type: 'string',
      title: 'manager',
    },
    type_id: {
      type: 'string',
      title: 'site_type',
    },
    location: {
      type: 'object',
      title: 'location',
      properties: {
        lat: {
          type: 'string',
        },
        lng: {
          type: 'string',
        },
      },
    },
    is_active: {
      type: 'number',
      title: 'activity',
      oneOf: [
        { const: 1, title: 'active' },
        { const: 0, title: 'inactive' },
      ],
    },
  },
});

export default schema;
