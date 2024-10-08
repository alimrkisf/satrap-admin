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
  TariffSelectionWidget,
} from 'components/FormWidgets';

const uiSchema = () => ({
  'ui:order': ['tariff_id', 'vehicle_id', 'start_time', 'start_date', '*'],
  tariff_id: {
    'ui:widget': TariffSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  vehicle_id: {
    'ui:widget': VehicleSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  // driver_id: {
  //   'ui:widget': UsersSelectionWidget,
  //   'ui:options': {
  //     xs: 6,
  //     sm: 6,
  //     md: 6,
  //     lg: 6,
  //     xl: 6,
  //   },
  // },
  type_id: {
    // 'ui:widget': TasksTypeSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  operation_type_id: {
    'ui:widget': OperationTypeSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  workshop_id: {
    'ui:widget': WorkshopSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  site_id: {
    'ui:widget': SiteSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  material_type_id: {
    'ui:widget': MaterialTypeSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  shift_type_id: {
    'ui:widget': ShiftTypeSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  // status_id: {
  //   'ui:widget': TasksStatusSelectionWidget,
  //   'ui:options': {
  //     xs: 12,
  //     sm: 12,
  //     md: 12,
  //     lg: 12,
  //     xl: 12,
  //   },
  // },
  start_time: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  start_date: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
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
      md: 4,
      lg: 4,
      xl: 4,
    },
  },
  // baskul_cost: {
  //   'ui:options': {
  //     xs: 6,
  //     sm: 6,
  //     md: 6,
  //     lg: 6,
  //     xl: 6,
  //   },
  // },
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
      md: 2,
      lg: 2,
      xl: 2,
    },
  },
  coefficient: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 2,
      lg: 2,
      xl: 2,
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
