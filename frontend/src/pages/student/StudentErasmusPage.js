import {
  Box,
  Button,
  Card,
  CardContent, Collapse,
  Container,
  Grid, List,
  ListItemButton,
  ListItemIcon,
  ListItemText, ListSubheader,
  Typography
} from '@mui/material';
import {DashboardNavbar} from '../../components/componentsStudent/dashboard-navbar';
import {DashboardSidebar} from '../../components/componentsStudent/dashboard-sidebar';
import {styled} from '@mui/material/styles';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import ArticleIcon from '@mui/icons-material/Article';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {ExpandLess, ExpandMore, StarBorder} from "@mui/icons-material";

const DashboardLayoutRoot = styled('div')(({theme}) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));


function InboxIcon() {
  return null;
}

function SendIcon() {
  return null;
}

function DraftsIcon() {
  return null;
}

const StudentErasmusPage = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const navigate = useNavigate();

    const goErasmusApplication = () => {
        navigate("/erasmusApplication")
    }

    const goPreapproval = () => {
        navigate("/preapproval")
    }

  const goLearningAgreement = () => {
    navigate()
  }

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
      <>
          <title>
              StudentErasmusPage Program
          </title>
          <DashboardLayoutRoot>
              <Box
                  component="main"
                  sx={{
                      flexGrow: 1,
                      py: 8
                  }}
              >
                  <Container maxWidth="lg">
                      <Typography
                          sx={{mb: 3}}
                          variant="h4"
                      >
                          StudentErasmusPage Program
                      </Typography>
                      <Grid
                          container
                          spacing={3}
                      >
                          <Grid
                              item
                              lg={6}
                              md={8}
                              xs={12}
          >
                              <Typography
                                  color="textPrimary"
                                  variant="h6"
                              >
                                  StudentErasmusPage Application
                              </Typography>
                              <List
                                  sx={{width: '100%'}}
                                  component="nav"
                                  aria-labelledby="nested-list-subheader"
                              >
                                  <ListItemButton>
                                      <ListItemIcon>
                                          <ArticleIcon/>
                                      </ListItemIcon>
                                      <ListItemText primary="View Your StudentErasmusPage Applications"/>
              </ListItemButton>
              <ListItemButton>
                  <ListItemIcon>
                      <HelpOutlineIcon/>
                  </ListItemIcon>
                  <ListItemText primary="StudentErasmusPage Frequently Asked Questions"/>
              </ListItemButton>
            </List>
          </Grid>
          <Grid
              item
              lg={6}
              md={8}
              xs={12}
          >
              <Typography
                  color="textPrimary"
                  variant="h6"
              >
                  Preapproval for StudentErasmusPage Application
              </Typography>
              <List
                  sx={{width: '100%'}}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
              >
                  <ListItemButton onClick={() => {
                      navigate("/preapprovals")
                  }}>
                      <ListItemIcon>
                  <ArticleIcon/>
                </ListItemIcon>
                <ListItemText primary="View Your Preapproval Applications"/>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <HelpOutlineIcon/>
                </ListItemIcon>
                <ListItemText primary="Preapproval Frequently Asked Questions"/>
              </ListItemButton>
            </List>
          </Grid>
          <Grid
              item
              lg={6}
              md={8}
              xs={12}
          >
              <Typography
                  color="textPrimary"
                  variant="h6"
              >
                  Learning Agreement for StudentErasmusPage Application
              </Typography>
              <List
                  sx={{width: '100%'}}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
              >
                  <ListItemButton>
                      <ListItemIcon>
                          <ArticleIcon/>
                      </ListItemIcon>
                <ListItemText primary="View Your Learning Agreements"/>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <HelpOutlineIcon/>
                </ListItemIcon>
                <ListItemText primary="Learning Agreement Frequently Asked Questions"/>
              </ListItemButton>
            </List>
          </Grid>
          <Grid
              item
              lg={6}
              md={8}
              xs={12}
          >
              <Typography
                  color="textPrimary"
                  variant="h6"
              >
                  Course Review Forms for StudentErasmusPage Application
              </Typography>
              <List
                  sx={{width: '100%'}}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
              >
                  <ListItemButton onClick={() => {
                      navigate("/courseReviewForms")
                  }}>
                      <ListItemIcon>
                  <ArticleIcon/>
                </ListItemIcon>
                <ListItemText primary="View Your Course Review Forms"/>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <HelpOutlineIcon/>
                </ListItemIcon>
                <ListItemText primary="Course Review Forms Frequently Asked Questions"/>
              </ListItemButton>
            </List>
          </Grid><Grid
            item
            lg={6}
            md={8}
            xs={12}
        >
                          <Typography
                              color="textPrimary"
                              variant="h6"
                          >
                              Course Tranfer Forms for StudentErasmusPage Application
                          </Typography>
                          <List
                              sx={{width: '100%'}}
                              component="nav"
                              aria-labelledby="nested-list-subheader"
                          >
                              <ListItemButton onClick={() => {
                              }}>
                                  <ListItemIcon>
                                      <ArticleIcon/>
              </ListItemIcon>
              <ListItemText primary="View Your Course Transfer Forms"/>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <HelpOutlineIcon/>
              </ListItemIcon>
              <ListItemText primary="Course Transfer Forms Frequently Asked Questions"/>
            </ListItemButton>
          </List>
        </Grid>
        </Grid>
      </Container>
    </Box>
    </DashboardLayoutRoot>
    <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
        <DashboardSidebar 
          onClose={() => setSidebarOpen(false)}
          open={isSidebarOpen}/>
  </>
  );
};

export default StudentErasmusPage;
