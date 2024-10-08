import {
  UsersSelectionWidget,
  SiteSelectionWidget,
  VehicleSelectionWidget,
  TasksTypeSelectionWidget,
  TasksStatusSelectionWidget,
  OperationTypeSelectionWidget,
  WorkshopSelectionWidget,
  MaterialTypeSelectionWidget,
  ShiftTypeSelectionWidget,
} from 'components/FormWidgets';

const uiSchema = () => ({
  vehicle_id: {
    'ui:widget': VehicleSelectionWidget,
    'ui:disabled': true,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  driver_id: {
    'ui:widget': UsersSelectionWidget,
    'ui:disabled': true,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  type_id: {
    'ui:widget': TasksTypeSelectionWidget,
    'ui:disabled': true,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  operation_type_id: {
    'ui:widget': OperationTypeSelectionWidget,
    'ui:disabled': true,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  workshop_id: {
    'ui:widget': WorkshopSelectionWidget,
    'ui:disabled': true,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  site_id: {
    'ui:widget': SiteSelectionWidget,
    'ui:disabled': true,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  material_type_id: {
    'ui:widget': MaterialTypeSelectionWidget,
    'ui:disabled': true,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  shift_type_id: {
    'ui:widget': ShiftTypeSelectionWidget,
    'ui:disabled': true,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  status_id: {
    'ui:widget': TasksStatusSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  start_time: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  end_time: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  start_date: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  end_date: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  // stop_dueto: {
  //   'ui:options': {
  //     xs: 12,
  //     sm: 12,
  //     md: 12,
  //     lg: 12,
  //     xl: 12,
  //   },
  // },
  cost: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  bill_number: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  baskul: {
    'ui:options': {
      xs: 12,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  // supervisor_id: {
  //   'ui:widget': UsersSelectionWidget,
  //   'ui:options': {
  //     xs: 12,
  //     sm: 12,
  //     md: 12,
  //     lg: 12,
  //     xl: 12,
  //   },
  // },
  // creator_id: {
  //   'ui:widget': UsersSelectionWidget,
  //   'ui:options': {
  //     xs: 6,
  //     sm: 6,
  //     md: 6,
  //     lg: 6,
  //     xl: 6,
  //   },
  // },
  // updator_id: {
  //   'ui:widget': UsersSelectionWidget,
  //   'ui:options': {
  //     xs: 6,
  //     sm: 6,
  //     md: 6,
  //     lg: 6,
  //     xl: 6,
  //   },
  // },
  tonnage: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
  },
  coefficient: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  // have_food: {
  //   'ui:widget': 'radio',
  //   'ui:options': {
  //     inline: true,
  //     xs: 12,
  //     sm: 12,
  //     md: 12,
  //     lg: 12,
  //     xl: 12,
  //   },
  // },
  description: {
    'ui:widget': 'textarea',
    'ui:options': {
      rows: 2,
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
  },
});

export default uiSchema;
