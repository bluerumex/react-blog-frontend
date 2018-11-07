import React, { Component } from 'react';
import LoginModal from 'components/modal/LoginModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

class LoginModalContainer extends Component {
    _handleLogin = async () => {
        const { BaseActions, password } = this.props;
        
        try {
            await BaseActions.login(password);
            BaseActions.hideModal('login');
            localStorage.logged = 'true';
        } catch(e) {
            console.log(e);
        }
    };

    _handleCancel = () => {
        const { BaseActions } = this.props;
        BaseActions.hideModal('login');
    };

    _handleChange = (e) => {
        const { value } = e.target;
        const { BaseActions } = this.props;
        BaseActions.changePasswordInput(value);
    };

    _handleKeyPress = (e) => {
        // 엔터 키를 누르면 로그인 호출
        if (e.key === 'Enter') {
            this._handleLogin();
        }
    };

    render() {
        const { _handleLogin, _handleCancel, _handleChange, _handleKeyPress } = this;
        const { visible, error, password } = this.props;

        return (
            <LoginModal
                onLogin={_handleLogin}
                onCancel={_handleCancel}
                onChange={_handleChange}
                onKeyPress={_handleKeyPress}
                visible={visible} 
                error={error}
                password={password}
            />
        );
    }
}

export default connect(
    (state) => ({
        visible: state.base.getIn(['modal', 'login']),
        password: state.base.getIn(['loginModal', 'password']),
        error: state.base.getIn(['loginModal', 'error'])
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(LoginModalContainer);