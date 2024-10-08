import graph from 'models/TariffModel/Create/graph';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  Slide,
  Stack,
  Button,
  styled,
  CardMedia,
  CardHeader,
  Typography,
  CardActionArea,
} from '@mui/material';

import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { FormattedMessage } from 'react-intl';
import { isEmptyObject } from 'helpers/formatObject';
import { NewDialog, NewDialogActions, NewDialogContent, NewDialogTitle } from 'components';

import Form from 'models/TariffModel/Create/Form';

export default function FixedOrderCreation() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const { userToken } = useSelector((state) => state.auth);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const [formUpdate, { loading }] = useMutation(graph.create.query, {
    context: {
      serviceName: graph.create.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const onChange = ({ formData }) => {
    setFormData(formData);
  };

  const onSubmit = async () => {
    try {
      const { data, errors } = await formUpdate({
        variables: { ...formData, cost: String(formData?.cost) },
      });
      if (!errors) {
        onClose();
        setFormData({});
        if (!isEmptyObject(data)) {
          data[graph.create.name]?.messages.map((message) => toast.success(String(message)));
        }
      }
    } catch (error) {
      setFormData(formData);
    }
  };

  return (
    <>
      <Card variant="outlined" sx={{ width: '100%' }}>
        <CardActionArea onClick={onOpen}>
          <CardMedia alt="Tariff" image="/assets/works/tariff.jpg" sx={{ pt: '70%', m: 1, borderRadius: 2 }} />
          <CardHeader
            title="ایجاد تعرفه"
            subheader={
              <Typography variant="subtitle2" fontSize={14} color="text.disabled">
                توضیحات تعرفه
              </Typography>
            }
          />
        </CardActionArea>
      </Card>
      <NewDialog label="create" open={open} onClose={onClose} maxWidth="md">
        <NewDialogTitle title="ایجاد تعرفه" onClose={onClose} />
        <NewDialogContent>
          <Stack p={2} alignItems="center">
            <Form formData={formData} onChange={onChange} />
          </Stack>
        </NewDialogContent>
        <NewDialogActions>
          <Button size="large" variant="contained" onClick={onSubmit}>
            <FormattedMessage id="create" />
          </Button>
        </NewDialogActions>
      </NewDialog>
    </>
  );
}
