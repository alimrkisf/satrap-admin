import graph from './graph';
import React, { useEffect, useState } from 'react';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';

import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { CircularProgress, Stack, Tooltip, alpha, useTheme } from '@mui/material';
import { isEmptyObject } from 'helpers/formatObject';

const MediaUploader = ({ model, collection, modelId, refetch }) => {
  const theme = useTheme();
  const [attachment, setAttachment] = useState(null);
  const { userToken } = useSelector((state) => state.auth);

  const [muatate, { loading }] = useMutation(graph.assign.query, {
    context: {
      serviceName: graph.assign.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const handleSubmit = async () => {
    try {
      const { data } = await muatate({
        variables: {
          id: modelId,
          files: attachment,
          model_name: model,
          collection_name: collection,
        },
      });
      if (!isEmptyObject(data)) {
        refetch();
        setAttachment(null);
        data[graph.assign.name]?.messages.map((message) => toast.success(String(message)));
      }
    } catch (error) {
      setAttachment(null);
    }
  };

  const handleFileChange = ({ target: { validity, files } }) => {
    if (validity.valid) {
      setAttachment(files);
    }
  };

  useEffect(() => {
    attachment && handleSubmit();
  }, [attachment]);

  return (
    <Stack rowGap={1}>
      <form>
        <input
          multiple
          name="file"
          type="file"
          id="file-card"
          accept="image/*"
          maxLength={5}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <label htmlFor="file-card">
          <Tooltip title="بارگذاری">
            <Stack
              width={180}
              height={120}
              columnGap={1}
              borderRadius={2}
              direction="row"
              color="info.main"
              fontWeight="bold"
              border="1px dotted"
              alignItems="center"
              justifyContent="center"
              borderColor="info.main"
              fontSize={48}
              sx={{
                
                ':hover': {
                  bgcolor: alpha(theme.palette.info.main, 0.1),
                },
              }}
            >
              {loading ? (
                <CircularProgress color="inherit" size={24} />
              ) : (
                <AddPhotoAlternateRoundedIcon color="inherit" fontSize="inherit" />
              )}
            </Stack>
          </Tooltip>
        </label>
      </form>
    </Stack>
  );
};

export default MediaUploader;
