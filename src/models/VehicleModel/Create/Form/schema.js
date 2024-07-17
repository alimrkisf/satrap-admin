const schema = (vehicleTypes, vehicleStatuses) => ({
  type: 'object',
  required: [],
  properties: {
    owner_id: {
      type: 'string',
      title: 'owner',
    },
    driver_id: {
      type: 'string',
      title: 'driver',
    },
    type_id: {
      type: 'string',
      title: 'vehicle_type',
      oneOf: vehicleTypes,
    },
    status: {
      type: 'string',
      title: 'vehicle_status',
      oneOf: vehicleStatuses,
    },
    serial_number: {
      type: 'string',
      title: 'serialNumber',
    },
    plaque: {
      type: 'string',
      title: 'plaque',
    },
    details: {
      type: 'string',
      title: 'details',
    },
  },
});

export default schema;
