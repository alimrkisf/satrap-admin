import React, { useState } from 'react';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

import { Stack, Tooltip, IconButton, CircularProgress, Box, Button, Typography } from '@mui/material';
import { LoadingMore, NewDialogActions, NewDialogContent, NewDialogTitle } from 'components';

import Model from '../Model';
import Filter from '../Filter';
import Delete from '../Delete';
import Create from '../Create';
import Assignment from '../Assignment';
import { FormattedMessage } from 'react-intl';

export default function List({
  page,
  limit,
  total,
  setPage,

  result,
  refetch,
  loading,

  title,
  isPopup,
  onClose,

  isAssign,
  onAssign,
  assigning,
  multiSelect,

  filter,
  setFilter,
  clearFilter,
  preSelected,
}) {
  const [selected, setSelected] = useState(preSelected || []);
  const [direction, setDirection] = useState('right');

  // const handleSelect = (item) => {
  //   const selectedIndex = selected.map((item) => item.id).indexOf(item.id);
  //   let newSelected = [];
  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, item);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
  //   }
  //   setSelected(newSelected);
  //   if (isAssign && !multiSelect && newSelected.length > 0) {
  //     onAssign(newSelected, onClose);
  //   }
  // };

  const handleBack = (item) => {
    let { id } = item;
    setDirection('left');
    return setFilter({ ...filter, category_id: id });
  };

  const handleOpen = (item) => {
    let { id, children } = item;
    // console.log('children', children);

    let hasChild = children ? children?.length > 0 : false;
    if (hasChild) {
      setDirection('right');
      return setFilter({ ...filter, category_id: id });
    }
  };

  const handleSelect = (item) => {
    const selectedIndex = selected.map((item) => item.id).indexOf(item.id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, item);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
    if (isAssign && !multiSelect && newSelected.length > 0) {
      onAssign(newSelected, onClose);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelected(result);
      return;
    }
    setSelected([]);
  };

  const clearSelection = () => setSelected([]);

  const refresh = () => {
    clearSelection();
    refetch();
  };

  // console.log('result', result.data);

  return (
    <>
      {isAssign && multiSelect && (
        <Assignment
          title={title}
          onClose={onClose}
          onAssign={onAssign}
          selected={selected}
          assigning={assigning}
          handleSelect={handleSelect}
        />
      )}
      <NewDialogTitle title={<FormattedMessage id="category" />} onClose={onClose} isPopup={isPopup}>
        <Filter
          total={total}
          init={filter}
          ids={selected}
          refetch={refetch}
          loading={loading}
          setFilter={setFilter}
          clearFilter={clearFilter}
          acception={result.length}
          selection={selected.length}
          clearSelection={clearSelection}
          handleSelectAllClick={handleSelectAllClick}
          isPopup={isPopup}
        />
      </NewDialogTitle>
      <NewDialogContent>
        <Stack p={0.5} rowGap={0.5} minHeight={isPopup ? 'calc(100vh - 245px)' : 'calc(100vh - 264px)'}>
          {/* {result.map((model, i) => (
            <Model
              key={i}
              model={model}
              refetch={refetch}
              style={{ flex: 1 }}
              direction={direction}
              delay={(i % limit) + 1}
              checked={selected.find((select) => model.id === select.id) ? true : false}
              handleSelect={() => handleSelect({ id: model?.id, title: model.title })}
            />
          ))} */}
          {/* <LoadingMore total={total} result={result.length} loading={loading} onClick={() => setPage(page + 1)} /> */}
          {/* {result[0] && (
            <ParentModel model={result[0]} refetch={refetch} handleSelect={() => handleSelect(result[0])} />
          )} */}
          {result?.data &&
            result.data[0].children.map((model, i) => (
              <Model
                key={i}
                delay={i + 1}
                model={model}
                refetch={refetch}
                style={{ flex: 1 }}
                direction={direction}
                checked={selected.find((select) => model.id === select.id) ? true : false}
                handleSelect={() => handleSelect(model)}
                handleOpen={() => handleOpen(model)}
              />
            ))}
        </Stack>
      </NewDialogContent>
      <NewDialogActions isPopup={isPopup}>
        {result?.data && (
          <Button
            disabled={!result?.data[0]?.parent}
            sx={{ mr: 'auto' }}
            onClick={() => handleBack(result?.data[0]?.parent)}
          >
            <FormattedMessage id="back" />
          </Button>
        )}
        <Tooltip title={<FormattedMessage id="refresh" />}>
          <IconButton sx={{ bgcolor: 'action.selected', color: '#fff' }} size="medium" onClick={refresh}>
            {loading ? (
              <CircularProgress color="primary" size={20} />
            ) : (
              <RefreshRoundedIcon color="primary" fontSize="small" />
            )}
          </IconButton>
        </Tooltip>
        {!isPopup && <Delete ids={selected.map((item) => item.id)} refetch={refresh} selection={selected.length > 0} />}
        {/* {result?.data && result?.data[0]?.parent === null && (
          <Create size="medium" ids="1" title={<FormattedMessage id="create" />} refetch={refetch} />
        )} */}
        {/* Need Parent Id */}
      </NewDialogActions>
    </>
  );
}
