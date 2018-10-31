import React from 'react';
import Styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const cx = classNames.bind(Styles);

const PageTemplate = ({children}) => {
    return (
        <div className={cx('page-template')}>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default PageTemplate;