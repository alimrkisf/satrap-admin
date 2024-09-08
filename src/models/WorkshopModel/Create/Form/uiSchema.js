import { UsersSelectionWidget, SiteTypeSelectionWidget } from 'components/FormWidgets';

const uiSchema = () => ({
  'ui:order': ['title', 'status_id', 'manager_id', 'is_active', 'location'],
  title: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  alias: {
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  // shipping_cost_config: {
  //   'ui:widget': SiteTypeSelectionWidget,
  //   'ui:options': {
  //     xs: 12,
  //     sm: 12,
  //     md: 12,
  //     lg: 12,
  //     xl: 12,
  //   },
  // },
  status_id: {
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  manager_id: {
    'ui:widget': UsersSelectionWidget,
    'ui:options': {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
  location: {
    'ui:field': 'location',
    'ui:options': {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
  },
  is_active: {
    'ui:widget': 'radio',
    'ui:options': {
      inline: true,
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    },
  },
});

export default uiSchema;
