import React from 'react';
import { Card, Typography, Button } from 'antd';
import { connect } from 'react-redux';
import { changeFavoriteListAction } from '../redux/actions';
import reduxState from '../redux/types';

const { Meta } = Card;
const { Paragraph } = Typography;

interface CardComponentProps {
    name:string, 
    title:string,
    distance: number,
    inNetwork: boolean,
    img:string, 
    tags:string[],
    changeFavoriteListAction: (element:string) => void,
    favorites:string[]
}

class CardComponent extends React.Component<CardComponentProps> {
    render() {
        return(
            <Card  
                hoverable={true}
                style={{ width: "100%", background:"#f0f2f5"}}
                cover={<img alt="example" src={this.props.img} />}>
                    <Meta 
                        title={this.props.name} 
                        description={this.props.title} 
                    />
                    <Paragraph> 
                        <br/> {this.props.distance} miles away <br/>
                        <br/> {this.props.inNetwork ? "In Network" : "Out of Network"} <br/>
                        <hr/>
                    </Paragraph>
                    <Button 
                        type={this.props.favorites.includes(this.props.name) ? "primary" : "default"}
                        onClick={() => this.onClick()}> {this.props.favorites.includes(this.props.name) ? "Remove" : " Favorite"} 
                    </Button>
            </Card>
        )
    }

    onClick() {
        this.props.changeFavoriteListAction(this.props.name)
    }
}

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
)(CardComponent);
export { connectedComponent as CardComponent };