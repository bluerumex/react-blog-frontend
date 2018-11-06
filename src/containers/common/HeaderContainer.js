import React, { Component } from 'react';
import Header from 'components/common/Header';
import { withRouter } from 'react-router-dom';

import * as baseActions from 'store/modules/base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class HeaderContainer extends Component {
    _handleRemove = () => {
        const { BaseActions } = this.props;
        BaseActions.showModal('remove');
    }

    render() {
        const { _handleRemove } = this;
        const { match } = this.props;

        const { id } = match.params;

        return (
            <Header
                postId={id}
                onRemove={_handleRemove}
            />
        );
    }
}

export default connect(
    (state) => ({}),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(withRouter(HeaderContainer));