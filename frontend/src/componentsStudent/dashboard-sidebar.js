import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { Cog as CogIcon } from '../icons/cog';
import { Lock as LockIcon } from '../icons/lock';
import { Selector as SelectorIcon } from '../icons/selector';
import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
import { User as UserIcon } from '../icons/user';
import { UserAdd as UserAddIcon } from '../icons/user-add';
import { Users as UsersIcon } from '../icons/users';
import { XCircle as XCircleIcon } from '../icons/x-circle';
import { Logo } from './logo';
import { NavItem } from './nav-item';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import ApprovalOutlinedIcon from '@mui/icons-material/ApprovalOutlined';
import SouthAmericaOutlinedIcon from '@mui/icons-material/SouthAmericaOutlined';
import { HiGlobeEuropeAfrica } from "react-icons/hi2";
import { HiGlobeAmericas } from "react-icons/hi2";

const items = [
  {
    href: '/dashboardStudent',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Dashboard'
  },
  {
    href: '/erasmusProgram',
    icon: (<HiGlobeEuropeAfrica fontSize="small" />),
    title: 'Erasmus Program'
  },
  {
    href: '/exchangeProgram',
    icon: (<HiGlobeAmericas fontSize="small" />),
    title: 'Exchange Program'
  },
  {
    href: '/splash',
    icon: (<ApprovalOutlinedIcon fontSize="small" />),
    title: 'Applications'
  },
  {
    href: '/products',
    icon: (<ImportExportOutlinedIcon fontSize="small" />),
    title: 'Submissions'
  },
  {
    href: '/accountStudent',
    icon: (<UserIcon fontSize="small" />),
    title: 'Account'
  },
  {
    href: '/settingStudent',
    icon: (<CogIcon fontSize="small" />),
    title: 'Settings'
  }
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
              <a>
                <Logo
                  sx={{
                    height: 42,
                    width: 42
                  }}
                />
              </a>
          </Box>
          <Box sx={{ px: 2 }}>
            <Typography
              sx={{ m: 1 }}
              variant="h4"
          >
            Erasmust
            </Typography>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: '#2D3748' }} />
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};