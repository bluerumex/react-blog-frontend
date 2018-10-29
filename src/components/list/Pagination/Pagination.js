import React from 'react';

import styles from './Pagination.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const Pagination = () => {
    return (
        <div className={cx('pagination')}>
            <Button disabled>
                Prev
            </Button>
            <Button className={cx('number')}>
                페이지 1
            </Button>
            <Button>
                Next
            </Button>
        </div>
    )
}

export default Pagination;