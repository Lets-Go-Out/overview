import $ from 'jquery/dist/jquery.min';
import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/Overview.jsx'; // eslint-disable-line
import 'bootstrap/dist/js/bootstrap';
import './styles/overview_styles.css';

ReactDOM.render(<Overview />, document.getElementById('overview')); // eslint-disable-line no-undef
