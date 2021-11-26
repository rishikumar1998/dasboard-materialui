import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        p: 1,
        borderRadius: 1,
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function GridAutoColumns() {
  return (
    <div style={{ width: '100%'}} className="dashboardTittle">
      <Box
        sx={{
          display: 'grid',
          gridAutoColumns: '1fr',
          gap: 1,
        }}
      >
        <Item sx={{ gridRow: '1', gridColumn: 'span 2' }} ><h3 className="f_s_30 f_w_700 text_white">Dashboard</h3>
        <ol className="breadcrumb page_bradcam mb-0">
                                <li className="breadcrumb-item"><a href="/">Salessa </a></li>
                                <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                                <li className="breadcrumb-item active">Sales</li>
                            </ol>
        </Item>
        {/* The second non-visible column has width of 1/4 */}
        <Item sx={{ gridRow: '1', gridColumn: '4 / 5' }}><a href="/" className="white_btn3">Create Report</a></Item>
      </Box>
    </div>
  );
}