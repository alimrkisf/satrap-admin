const schema = (contractTypes, contractStatuses, operationTypes) => ({
  type: 'object',
  required: [],
  properties: {
    title: {
      type: 'string',
      title: 'title',
    },
    forecast_amount: {
      type: 'string',
      title: 'forecast_amount',
    },
    cost: {
      type: 'string',
      title: 'cost',
    },
    status: {
      type: 'string',
      title: 'status',
      oneOf: contractStatuses,
    },
    type_id: {
      type: 'string',
      title: 'contract_type',
      oneOf: contractTypes,
    },
    category_id: {
      type: 'string',
      title: 'category',
    },
    operation_type_id: {
      type: 'string',
      title: 'operation_type',
      // oneOf: operationTypes,
    },
    employer_type: {
      type: 'number',
      title: 'employer_type',
      oneOf: [
        { const: 0, title: 'natural' },
        { const: 1, title: 'legal' },
      ],
      default: 0,
    },
    workshop_id: {
      type: 'string',
      title: 'workshop',
    },
    start_date: {
      type: 'string',
      title: 'start_date',
      format: 'date',
    },
    end_date: {
      type: 'string',
      title: 'end_date',
      format: 'date',
    },
    is_civil: {
      type: 'number',
      title: 'civil_project',
      oneOf: [
        { const: 1, title: 'yes' },
        { const: 0, title: 'no' },
      ],
    },
    number: {
      type: 'string',
      title: 'contract_number',
    },
    contractual_number: {
      type: 'string',
      title: 'contractual_number',
    },

    details: {
      type: 'string',
      title: 'details',
    },
  },
  allOf: [
    {
      if: {
        properties: {
          employer_type: {
            const: 0,
          },
        },
      },
      then: {
        properties: {
          employer_id: {
            type: 'string',
            title: 'employer',
          },
        },
      },
    },
    {
      if: {
        properties: {
          employer_type: {
            const: 1,
          },
        },
      },
      then: {
        properties: {
          company_id: {
            type: 'string',
            title: 'company',
          },
        },
      },
    },
  ],
});

export default schema;
