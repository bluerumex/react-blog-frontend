import React, { Component } from 'react';

import styles from './ModalWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class ModalWrapper extends Component {

    state = {
        animate: false
    }

    _startAnimation = () => {
        this.setState({
            animate: true
        });

        setTimeout(() => {
            this.setState({
                animate: false
            })
        }, 250);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.visible !== this.props.visible) {
            this._startAnimation();
        }
    }

    render() {
        const { children, visible } = this.props;
        const { animate } = this.state;
        
        if (!visible && !animate) return null;

        // 상태에 따라 애니메이션 설정
        const animation = animate && (visible ? 'enter' : 'leave');

        return (
            <div>
                <div className={cx('gray-background', animation)} />
                <div className={cx('modal-wrapper')}>
                    <div className={cx('modal', animation)}>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalWrapper;