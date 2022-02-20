import React from 'react'
import BreadCrumb from '../SharedComponents/BreadCrumb/BreadCrumb';
import Profile from './Profile';

export default function ProfileMain() {
    const navigation = {
        first: 'home',
        last: 'MYPROFILE'
    };
  return (
    <>
         <BreadCrumb breadcrumbNavigation={navigation} />
         <Profile />
    </>
  )
}
