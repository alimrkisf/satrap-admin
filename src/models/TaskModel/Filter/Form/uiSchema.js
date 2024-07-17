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
  vehicle_ids: {
    'ui:widget': VehicleSelectionWidget,
    'ui:options': {
      xs: 3,
      sm: 3,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  workshop_ids: {
    'ui:widget': WorkshopSelectionWidget,
    'ui:options': {
      xs: 3,
      sm: 3,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  site_ids: {
    'ui:widget': SiteSelectionWidget,
    'ui:options': {
      xs: 3,
      sm: 3,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  driver_ids: {
    'ui:widget': UsersSelectionWidget,
    'ui:options': {
      xs: 3,
      sm: 3,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  type_ids: {
    'ui:options': {
      xs: 3,
      sm: 3,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  operation_type_ids: {
    'ui:options': {
      xs: 3,
      sm: 3,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },

  material_type_ids: {
    'ui:options': {
      xs: 3,
      sm: 3,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  shift_type_ids: {
    'ui:options': {
      xs: 3,
      sm: 3,
      md: 3,
      lg: 3,
      xl: 3,
    },
  },
  status_ids: {
    'ui:widget': TasksStatusSelectionWidget,
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
  },

  start_time: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  end_time: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
});

export default uiSchema;
