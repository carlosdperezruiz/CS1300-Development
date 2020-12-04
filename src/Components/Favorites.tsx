import React from 'react';

import { Layout, Typography, List } from 'antd';
import { reduxState } from '../redux/types';
import { changeFavoriteListAction } from '../redux/actions';
import { connect } from 'react-redux';

const { Sider } = Layout;
const { Title } = Typography;

interface FavoritesProps {
    favorites:string[],
    changeFavoriteListAction: (element:string) => void,
}

class Favorites extends React.Component<FavoritesProps>  {
  render()    {
    return (
        <Sider width={200}>
            <Title level={3}>Favorites</Title>
            <List
                itemLayout="horizontal"
                dataSource={this.props.favorites}
                renderItem={(item: any) => (
                <List.Item actions={[<button type="button" className="link-button" onClick={() => this.onClick(item)}>Remove</button>]}>
                    <List.Item.Meta title={item}/>
                </List.Item>
                )}
            />
        </Sider>
    );
  }

    onClick(element:string) {
        this.props.changeFavoriteListAction(element);
    }
}

// Map redux state to component state
function mapStateToProps(state:reduxState) {
  return {
    favorites:state.favorites
  }
}
// Map redux actions to component props
function mapDispatchToProps(dispatch: any) {
  return {
    changeFavoriteListAction: (element:string) => dispatch(changeFavoriteListAction(element))
  }
}

// The Hight Order Component (HOC)
// props need to be recived by the component
const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
export { connectedComponent as Favorites };