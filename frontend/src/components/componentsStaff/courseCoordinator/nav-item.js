import PropTypes from 'prop-types';
import { Box, Button, ListItem } from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom";
import React from 'react';


export const NavItem = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { href, icon, title, ...others } = props;
  const active = href ? (location.pathname === href) : false;

  const goLink = () => {
    navigate(href)
  }

  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        mb: 0.5,
        py: 0,
        px: 2
      }}
      {...others}
    >
        <Button
          href = {href}
          component="a"
          startIcon={icon}
          disableRipple
          onClick={() => goLink}
          sx={{
            backgroundColor: active && 'rgba(255,255,255, 0.08)',
            borderRadius: 1,
            color: active ? 'secondary.main' : 'neutral.300',
            fontWeight: active && 'fontWeightBold',
            justifyContent: 'flex-start',
            px: 3,
            textAlign: 'left',
            textTransform: 'none',
            width: '100%',
            '& .MuiButton-startIcon': {
              color: active ? 'secondary.main' : 'neutral.400'
            },
            '&:hover': {
              backgroundColor: 'rgba(255,255,255, 0.08)'
            }
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {title}
          </Box>
        </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string
};
