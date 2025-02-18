import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import Ico from '../Icon';
import Label from '../Label';
import { default as MuiIconButton } from '../../muiComponents/IconButton';
import { default as Photo } from '../../muiComponents/Avatar';
import List from '../../muiComponents/List';
import { default as Typography } from '../../muiComponents/Heading';
import Grid from '../../muiComponents/Grid';
import ListItemText from '../../muiComponents/ListItemText';
import { Theme } from '../../design-tokens/theme';

export const OverviewItem = styled('span')<{ theme?: Theme }>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  margin: '0 0 0 16px',
  color: theme?.palette.type === 'light' ? theme?.palette.greyLight2 : theme?.palette.white,
  fontSize: 12,
  [`@media (max-width: ${theme && theme.breakPoints.medium}px)`]: {
    ':nth-of-type(3)': {
      display: 'none',
    },
  },
  [`@media (max-width: ${theme && theme.breakPoints.small}px)`]: {
    ':nth-of-type(4)': {
      display: 'none',
    },
  },
}));

export const Icon = styled(Ico)<{ theme?: Theme }>(({ theme }) => ({
  margin: '2px 10px 0 0',
  fill: theme?.palette.type === 'light' ? theme?.palette.greyLight2 : theme?.palette.white,
}));

export const Published = styled('span')<{ theme?: Theme }>(({ theme }) => ({
  color: theme?.palette.type === 'light' ? theme?.palette.greyLight2 : theme?.palette.white,
  margin: '0 5px 0 0',
}));

export const Text = styled(Label)<{ theme?: Theme }>(({ theme }) => ({
  fontSize: '12px',
  fontWeight: theme?.fontWeight.semiBold,
  color: theme?.palette.type === 'light' ? theme?.palette.greyLight2 : theme?.palette.white,
}));

export const Details = styled('span')({
  marginLeft: '5px',
  lineHeight: 1.5,
  display: 'flex',
  flexDirection: 'column',
});

export const Author = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const Avatar = styled(Photo)({
  width: '20px',
  height: '20px',
});

export const WrapperLink = styled(Link)({
  textDecoration: 'none',
});

export const PackageTitle = styled('span')<{ theme?: Theme }>(({ theme }) => ({
  fontWeight: theme && theme.fontWeight.bold,
  fontSize: 20,
  display: 'block',
  marginBottom: 12,
  color: theme?.palette.type == 'dark' ? theme?.palette.dodgerBlue : theme?.palette.eclipse,
  cursor: 'pointer',
  [`@media (max-width: ${theme && theme.breakPoints.small}px)`]: {
    fontSize: 14,
    marginBottom: 8,
  },
}));

export const GridRightAligned = styled(Grid)({
  textAlign: 'right',
});

export const PackageList = styled(List)<{ theme?: Theme }>(({ theme }) => ({
  padding: '12px 0 12px 0',
  ':hover': {
    backgroundColor: theme?.palette?.type == 'dark' ? theme?.palette?.secondary.main : theme?.palette?.greyLight3,
  },
  '> :last-child': {
    paddingTop: 0,
  },
  borderRadius: 4,
}));

export const IconButton = styled(MuiIconButton)({
  padding: 6,
  svg: {
    fontSize: 16,
  },
});

export const TagContainer = styled('span')<{ theme?: Theme }>(({ theme }) => ({
  marginTop: 8,
  marginBottom: 12,
  display: 'flex',
  flexWrap: 'wrap',
  [`@media (max-width: ${theme && theme.breakPoints.medium}px)`]: {
    display: 'none',
  },
}));

export const PackageListItemText = styled(ListItemText)({
  paddingRight: 0,
});

export const Description = styled(Typography)<{ theme?: Theme }>(({ theme }) => ({
  color: theme?.palette.type === 'light' ? theme?.palette.greyDark2 : theme?.palette.white,
  fontSize: '14px',
  paddingRight: 0,
}));
