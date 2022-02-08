import { Breadcrumbs } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = ({breadcrumbNavigation}) => {
    const { first, middle, last } = breadcrumbNavigation;
    return (
        <section style={{marginTop: '67px'}}>
            <div className="breadCrumbArea">
             <div className="breadcrumbNavigation">
                 <Breadcrumbs aria-label="breadcrumb" sx={{textAlign: 'center', justifyContent: 'center', padding: {xs: '0px 10px', md: '0px'}}}>
                  <Link to={`/${first.toLowerCase()}`} style={{ color: '#555', textDecoration: 'none', fontFamily: 'Poppins', fontWeight: 400, fontSize: 14 }} >
                   {first?.toUpperCase()}
                  </Link>
                  {middle && <span
                    style={{ color: '#555', textDecoration: 'none', fontFamily: 'Poppins', fontWeight: 400, fontSize: 14 }}
                    >
                    {middle?.toUpperCase()}
                    </span>}
                    <span
                    disabled={true}
                    aria-current="page"
                    style={{ color: '#000', textDecoration: 'none', fontFamily: 'Poppins', fontWeight: 400, fontSize: 14 }}
                    >
                    {last?.toUpperCase()}
                    </span>
                </Breadcrumbs>
             </div>
            </div>
        </section>
    );
};

export default BreadCrumb;