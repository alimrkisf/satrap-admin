const schema = (contractTypes, contractStatuses, operationTypes) => ({
  type: 'object',
  required: [],
  properties: {
    title: {
      type: 'string',
      title: 'title',
    },
    category_id: {
      type: 'string',
      title: 'category',
    },
    workshop_id: {
      type: 'string',
      title: 'workshop',
    },
    employer_id: {
      type: 'string',
      title: 'employer',
    },
    type_id: {
      type: 'string',
      title: 'contract_type',
      oneOf: contractTypes,
    },
    status: {
      type: 'string',
      title: 'status',
      oneOf: contractStatuses,
    },
    operation_type_id: {
      type: 'string',
      title: 'operation_type',
      // oneOf: operationTypes,
    },
    forecast_amount: {
      type: 'string',
      title: 'forecast_amount',
    },
    cost: {
      type: 'string',
      title: 'cost',
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
});

export default schema;
