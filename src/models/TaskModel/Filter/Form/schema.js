const schema = (taskTypes, operationTypes, materialTypes, shiftTypes, taskStatuses) => ({
  type: 'object',
  required: [],
  properties: {
    vehicle_ids: {
      type: 'string',
      title: 'vehicle',
    },
    site_ids: {
      type: 'string',
      title: 'site',
    },
    workshop_ids: {
      type: 'string',
      title: 'workshop',
    },
    driver_ids: {
      type: 'string',
      title: 'driver',
    },
    type_ids: {
      type: 'string',
      title: 'task_type',
      oneOf: taskTypes,
    },

    material_type_ids: {
      type: 'string',
      title: 'material_type',
      oneOf: materialTypes,
    },
    shift_type_ids: {
      type: 'string',
      title: 'shift_type',
      oneOf: shiftTypes,
    },
    operation_type_ids: {
      type: 'string',
      title: 'operation',
      oneOf: operationTypes,
    },
    status_ids: {
      type: 'string',
      title: 'task_status',
      oneOf: taskStatuses,
    },
    created_at: {
      type: 'string',
      title: 'created_date',
      format: 'date',
    },
  },
});

export default schema;
