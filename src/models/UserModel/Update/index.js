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

export default function UpdatePopup({ ids, title, refetch }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState();
  const { userToken } = useSelector((state) => state.auth);
  const [fetchModel, { loading }] = useLazyQuery(graph.get.query);
  const [updateModel, { loading: updating }] = useMutation(graph.update.query);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

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
          setFormData({ ...res, type_id: res.type?.id, status_id: res.status?.id, birth_date: res.birth_date });
        }
      }
    } catch (error) {}
  };

  const onChange = ({ formData }) => {
    setFormData(formData);
  };

  const onSubmit = async () => {
    // console.log('formdata', formData);
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
          firstname: formData?.firstname,
          lastname: formData?.lastname,
          national_code: formData?.national_code,
          birth_date: formData?.birth_date,
          tellphone: formData?.tellphone,
          address: formData?.address,
          email: formData?.email,
          gender: formData?.gender,
          is_active: formData?.is_active,
          status_id: formData?.status_id,
          type_id: formData?.type_id,
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
        <NewDialogTitle title={title} onClose={onClose} />
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
            disabled={loading || updating}
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
