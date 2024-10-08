import React from 'react';

import { useMediaQuery, useTheme, Stack, Typography, Chip } from '@mui/material';

const CardHeaderTitle = ({ maxWidth = '160px', title, chips = [] }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { defaultMatches: false });

  return (
    <Stack
      alignItems={isMobile ? 'flex-start' : 'center'}
      maxWidth="90%"
      direction={!isMobile ? 'row' : 'column'}
      columnGap={2}
      rowGap={1}
    >
      <Typography fontSize={14} variant="subtitle1" minWidth={200}>
        {title}
      </Typography>
      <Stack direction="row" columnGap={1} flexWrap="wrap" rowGap={0.5}>
        {chips.map((chip) => {
          const chipWidth = chip?.width || maxWidth;
          return <Chip sx={{ width: chipWidth }} key={chip.id} label={chip?.title || '----'} />;
        })}
      </Stack>
    </Stack>
  );
};

export default CardHeaderTitle;
