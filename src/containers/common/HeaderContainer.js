import React, { Component } from 'react';
import Header from 'components/common/Header';
import { withRouter } from 'react-router-dom';

class HeaderContainer extends Component {
    _handleRemove = () => {
        console.log('remove');
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

export default withRouter(HeaderContainer);