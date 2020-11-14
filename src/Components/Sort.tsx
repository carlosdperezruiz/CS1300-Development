import React from 'react';

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { changeSortByAction } from '../redux/actions';
import reduxState from '../redux/types';

interface SortProps {
    sort: string
    changeSortByAction: (sort:string) => void
}

class Sort extends React.Component<SortProps> {
    state = {
        selectedTags: ['All'],
    };
    constructor(props:SortProps) {
        super(props);
        this.menu = this.menu.bind(this)
    }

    render() {
        return(
            <Dropdown overlay={this.menu} trigger={['click']}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Sort <DownOutlined />
                </a>
            </Dropdown>
        );
    }

    menu () {
        return(
            <Menu defaultSelectedKeys={['0']} onClick={e => this.handleClick(e)}>
                <Menu.Item key="title">
                Name
                </Menu.Item>
                <Menu.Item key="description">
                Description
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
        );
    }

    handleClick(e:any) {
        this.props.changeSortByAction(e.key)
    }
}

function mapStateToProps(state:reduxState) {
    return {
        sort: state.sort
    }
}
// Map redux actions to component props
function mapDispatchToProps(dispatch: any) {
    return {
        changeSortByAction: (sort:string) => dispatch(changeSortByAction(sort))
    }
}

// The Hight Order Component (HOC)
// props need to be recived by the component
const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sort);
export { connectedComponent as Sort };