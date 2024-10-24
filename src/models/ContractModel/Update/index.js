import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';

import Form from './Form';
import graph from './graph';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useLazyQuery, useMutation } from '@apollo/client';
import { isEmptyObject } from 'helpers/formatObject';
import { NewDialog, NewDialogActions, NewDialogContent, NewDialogTitle } from 'components';
import { FormattedMessage } from 'react-intl';
import { CircularProgress, Stack } from '@mui/material';
import { endOfDay } from 'date-fns';
import { hasRequiredRole } from 'helpers';
import { fCurrency, rCurrency } from 'helpers/formatNumber';

export default function CompHandler(props) {
  const { userToken, userInfo, isAuthenticated } = useSelector((state) => state.auth);
  if (
    isAuthenticated &&
    hasRequiredRole(['superadmin', 'companyCeo', 'companyOperator', 'companyFinancial'], userInfo?.roles)
  ) {
    return <UpdatePopup {...props} />;
  }
  return null;
}

function UpdatePopup({ ids, title, refetch }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState();
  const [formError, setFormError] = useState(true);
  const { userToken } = useSelector((state) => state.auth);
  const [fetchModel, { loading }] = useLazyQuery(graph.get.query);
  const [updateModel, { loading: updating }] = useMutation(graph.update.query);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    setFormError(true);
  };

  const getModel = async () => {
    try {
      const { data } = await fetchModel({
        context: {
          serviceName: graph.get.serviceName,
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        },
        variables: {
          ids,
          for_admin: 1,
        },
      });
      if (!isEmptyObject(data)) {
        const res = data[graph.get.name].data[0];
        if (res) {
          setFormData({
            ...res,
            cost: fCurrency(res?.cost),
            forecast_amount: fCurrency(res?.forecast_amount),
            workshop_id: res?.workshop?.id,
            employer_id: res?.employer?.id,
            company_id: res?.company?.id,
            category_id: res?.category?.id,
            type_id: res?.type?.id,
            operation_type_id: res?.operation_type?.id,
            // status_id: res.status,
          });
        }
      }
    } catch (error) {}
  };

  const onChange = ({ formData, errors }) => {
    setFormData({
      ...formData,
      forecast_amount: fCurrency(formData?.forecast_amount),
      cost: fCurrency(formData?.cost),
    });
    setFormError(Boolean(errors.length > 0));
  };

  const onSubmit = async () => {
    try {
      const { data, errors } = await updateModel({
        context: {
          serviceName: graph.update.serviceName,
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        },
        variables: {
          ids,
          title: formData?.title,
          workshop_id: formData?.workshop_id,
          type_id: formData?.type_id,
          employer_id: formData?.employer_id,
          category_id: formData?.category_id,
          status: formData?.status_id,
          start_date: formData?.start_date,
          end_date: formData?.end_date,
          cost: rCurrency(formData?.cost),
          number: formData?.number,
          details: formData?.details,
          operation_type_id: formData?.operation_type_id,
          forecast_amount: rCurrency(formData?.forecast_amount),
          contractual_number: formData?.contractual_number,
          is_civil: formData?.is_civil,
        },
      });
      if (!errors) {
        refetch();
        onClose();
        setFormData({});
        if (!isEmptyObject(data)) {
          data[graph.update.name]?.messages.map((message) => toast.success(String(message)));
        }
      }
    } catch (error) {
      setFormData(formData);
    }
  };

  useEffect(() => {
    open && getModel();
  }, [open]);

  return (
    <>
      <Tooltip title={title}>
        <IconButton sx={{ bgcolor: 'info.lighter' }} size="small" color="info" onClick={onOpen}>
          <ModeEditRoundedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <NewDialog label="update" open={open} onClose={onClose} maxWidth="md">
        <NewDialogTitle title={<FormattedMessage id="edit_contract" />} onClose={onClose} />
        <NewDialogContent>
          {loading || !formData ? (
            <Stack rowGap={3} py={2} alignItems="center" justifyContent="center" height={140}>
              <CircularProgress />
            </Stack>
          ) : (
            <Stack p={2} alignItems="center">
              <Form formData={formData} onChange={onChange} />
            </Stack>
          )}
        </NewDialogContent>
        <NewDialogActions>
          <Button
            autoFocus
            size="large"
            color="primary"
            variant="contained"
            disabled={loading || updating || formError}
            onClick={onSubmit}
            sx={{ minWidth: 80 }}
          >
            <FormattedMessage id="update" />
          </Button>
        </NewDialogActions>
      </NewDialog>
    </>
  );
}
