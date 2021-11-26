
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RevenueGraph from './revenueGraph';
import TotalSalesUnit from './totalSalesUnit';
import { Dashboard } from '@mui/icons-material';
import DashboardTittle from './dashboardTittle';
import EarningsReport from './earningsReport';
import DailySales from './dailySales';
import Summery from './summery'
import TotalOrder from './totalOrder';
import TransactionCard from './transactionCard';
import NewsUpdate from './newsUpdate';
import AccountInfo from './accountInfo';
import Datepiker from './datepiker'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
          <Item>
              <DashboardTittle/>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
              <RevenueGraph/>
          </Item>
          <Item>
              <EarningsReport/>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
             <TotalSalesUnit/>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <DailySales/>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Summery/>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <TotalOrder/>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <TransactionCard/>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <NewsUpdate/>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <AccountInfo/>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Datepiker/>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <AccountInfo/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}