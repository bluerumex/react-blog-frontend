import React from 'react';
import Styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import HeaderContainer from 'containers/common/HeaderContainer';
import Footer from 'components/common/Footer';

const cx = classNames.bind(Styles);

const PageTemplate = ({children}) => {
    return (
        <div className={cx('page-template')}>
            <HeaderContainer />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default PageTemplate;