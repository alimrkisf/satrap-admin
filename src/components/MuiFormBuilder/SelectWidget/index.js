import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { ariaDescribedByIds, enumOptionsIndexForValue, enumOptionsValueForIndex, labelValue } from '@rjsf/utils';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';

/** The `SelectWidget` is a widget for rendering dropdowns.
 *  It is typically used with string properties constrained with enum options.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function SelectWidget({
  schema,
  id,
  name, // remove this from textFieldProps
  options,
  label,
  hideLabel,
  required,
  disabled,
  placeholder,
  readonly,
  value,
  multiple,
  autofocus,
  onChange,
  onBlur,
  onFocus,
  errorSchema,
  rawErrors = [],
  registry,
  uiSchema,
  hideError,
  formContext,
  ...textFieldProps
}) {
  const { enumOptions, enumDisabled, emptyValue: optEmptyVal, initFilter = {} } = options;

  multiple = typeof multiple === 'undefined' ? false : !!multiple;

  const emptyValue = multiple ? [] : '';
  const isEmpty = typeof value === 'undefined' || (multiple && value.length < 1) || (!multiple && value === emptyValue);

  const {
    language: { language, direction },
  } = useSelector((state) => state.setting);
  const _onChange = ({ target: { value } }) => onChange(enumOptionsValueForIndex(value, enumOptions, optEmptyVal));
  const _onBlur = ({ target: { value } }) => onBlur(id, enumOptionsValueForIndex(value, enumOptions, optEmptyVal));
  const _onFocus = ({ target: { value } }) => onFocus(id, enumOptionsValueForIndex(value, enumOptions, optEmptyVal));
  const selectedIndexes = enumOptionsIndexForValue(value, enumOptions, multiple);
  const { InputLabelProps, SelectProps, autocomplete, ...textFieldRemainingProps } = textFieldProps;

  return (
    <TextField
      id={id}
      name={id}
      dir={direction}
      label={<FormattedMessage id={labelValue(label || undefined, hideLabel, undefined)} />}
      value={!isEmpty && typeof selectedIndexes !== 'undefined' ? selectedIndexes : emptyValue}
      required={required}
      disabled={disabled || readonly}
      autoFocus={autofocus}
      autoComplete={autocomplete}
      placeholder={placeholder}
      error={rawErrors.length > 0}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
      {...textFieldRemainingProps}
      select // Apply this and the following props after the potential overrides defined in textFieldProps
      InputLabelProps={{
        ...InputLabelProps,
        shrink: !isEmpty,
      }}
      SelectProps={{
        ...SelectProps,
        multiple,
      }}
      aria-describedby={ariaDescribedByIds(id)}
    >
      {Array.isArray(enumOptions) &&
        enumOptions.map(({ value, label }, i) => {
          const disabled = Array.isArray(enumDisabled) && enumDisabled.indexOf(value) !== -1;
          return (
            <MenuItem key={i} value={String(i)} disabled={disabled} dir={direction}>
              <FormattedMessage id={labelValue(label || undefined, hideLabel, undefined)} />
            </MenuItem>
          );
        })}
    </TextField>
  );
}
