import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { DetailContext } from '../../pages/Version';
import NoItems from '../NoItems';
import { formatDateDistance } from '../../utils/package';
import List from '../../muiComponents/List';
import ListItem from '../../muiComponents/ListItem';

import { StyledText, Spacer, ListItemText } from './styles';

const UpLinks: React.FC = () => {
  const { packageMeta } = useContext(DetailContext);
  const { t } = useTranslation();

  if (!packageMeta || !packageMeta._uplinks || !packageMeta.latest) {
    return null;
  }

  const { _uplinks: uplinks, latest } = packageMeta;

  if (Object.keys(uplinks).length === 0) {
    return <NoItems text={t('uplinks.no-items', { name: latest.name })} />;
  }

  return (
    <>
      <StyledText variant="subtitle1">{t('uplinks.title')}</StyledText>
      <List>
        {Object.keys(uplinks)
          .reverse()
          .map(name => (
            <ListItem key={name}>
              <ListItemText>{name}</ListItemText>
              <Spacer />
              <ListItemText>{formatDateDistance(uplinks[name].fetched)}</ListItemText>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default UpLinks;
