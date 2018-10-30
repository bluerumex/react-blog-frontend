import React, { Component } from 'react';

import styles from './EditorTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class EditorTemplate extends Component {
    state = {
        leftPercentage: 0.5
    };

    _handleMouseMove = (e) => {
        console.log('mouse down...')
        this.setState({
            leftPercentage: e.clientX / window.innerWidth
        });
    };

    _handleMouseUp = (e) => {
        document.body.removeEventListener('mousemove', this._handleMouseMove);
        window.removeEventListener('mouseup', this._handleMouseUp);
    }

    _handleSeparatorMouseDown = (e) => {
        document.body.addEventListener('mousemove', this._handleMouseMove);
        window.addEventListener('mouseup', this._handleMouseUp);
    }

    render() {
        const { header, editor, preview } = this.props;
        const { leftPercentage } = this.state;
        const { _handleSeparatorMouseDown } = this;

        const leftStyle = {
            flex: leftPercentage
        };

        const rightStyle = {
            flex: 1 - leftPercentage
        };

        const separatorStyle = {
            left: `${leftPercentage * 100}%`
        }

        return (
            <div className={cx('editor-template')}>
                {header}
                <div className={cx('panes')}>
                    <div className={cx('pane', 'editor')} style={leftStyle}>
                    {editor}    
                    </div>
                    <div className={cx('pane', 'preview')} style={rightStyle}>
                    {preview}
                    </div>
                    <div
                        className={cx('separator')}
                        style={separatorStyle}
                        onMouseDown={_handleSeparatorMouseDown}
                    />
                </div>
            </div>
        );
    };
};

export default EditorTemplate;