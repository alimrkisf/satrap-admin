import React from 'react';
import Update from '../Update';
import Media from '../Media';

import { Card, Stack, Slide, Divider, Checkbox, Typography, CardHeader, CardActionArea, Chip } from '@mui/material';
import { AvatarPopover, NewSpeedDial } from 'components';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

export default function Model({ model, delay, direction, checked, handleSelect, refetch }) {
  const {
    language: { direction: dir },
  } = useSelector((state) => state.setting);
  const isRtl = dir === 'rtl';

  const vehicleType = model?.type?.title ? model?.type?.title : '';
  const plaque = model?.plaque ? model?.plaque : '';
  const driverName =
    model?.driver?.firstname && model?.driver?.lastname ? `${model?.driver?.firstname} ${model?.driver?.lastname}` : '';

  return (
    <>
      <Slide
        in
        unmountOnExit
        direction={direction}
        timeout={{ appear: delay * 150, enter: delay * 170, exit: delay * 190 }}
      >
        <Card
          sx={{
            position: 'relative',
            bgcolor: checked && 'action.disabledBackground',
          }}
        >
          <Stack
            left={8}
            zIndex={1}
            columnGap={0.5}
            height="100%"
            alignItems="center"
            position="absolute"
            justifyContent="flex-start"
            direction={isRtl ? 'row' : 'row-reverse'}
          >
            <Checkbox size="small" checked={checked} onChange={handleSelect} />
            <Media
              id={model.id}
              model="Brand"
              collection="avatar"
              title={model.title}
              subheader={model.producer?.title || 'برند'}
            >
              <AvatarPopover media={model?.media[0]?.full_url} />
            </Media>
          </Stack>
          <Stack
            right={8}
            zIndex={1}
            columnGap={0.5}
            height="100%"
            direction="row"
            alignItems="center"
            position="absolute"
            justifyContent="flex-end"
          >
            <NewSpeedDial>
              {vehicleType && <Chip label={vehicleType} />}
              {driverName && <Chip label={driverName} />}
              <Update ids={model.id} title={<FormattedMessage id="update" />} refetch={refetch} />
              <Media id={model.id} model="Brand" collection="banner" />
            </NewSpeedDial>
          </Stack>
          <CardActionArea onClick={handleSelect}>
            <CardHeader
              sx={{ px: 0.5, pl: 13 }}
              title={
                <Typography fontSize={14} variant="subtitle1">
                  {`پلاک : ${plaque}`}
                </Typography>
              }
              // subheader={
              //   <Typography fontSize={12} variant="subtitle2">
              //     {`شماره سریال : ${model.serial_number}`}
              //   </Typography>
              // }
            />
          </CardActionArea>
        </Card>
      </Slide>
      <Divider variant="middle" />
    </>
  );
}
