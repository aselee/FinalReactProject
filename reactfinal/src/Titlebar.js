import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

const AppBarIcon = () => (
  <AppBar
    title="CryptoCurrency"
    titleStyle={{textAlign: 'center' }}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    showMenuIconButton={false}
  />
);
export default AppBarIcon;
