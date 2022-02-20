import React from 'react';
import BreadCrumb from '../SharedComponents/BreadCrumb/BreadCrumb';
import LoginRegisterMain from './LoginRegisterMain';

export default function AccountMain() {
    const navigation = {
        first: 'home',
        middle: 'ACCOUNTS',
        last: 'LOGIN-REGISTER'
    };
  return (
    <>
        <BreadCrumb breadcrumbNavigation={navigation} />
        <LoginRegisterMain />
    </>
  )
}
