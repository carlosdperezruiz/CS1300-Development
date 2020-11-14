import React from 'react';
import { Row, Col, Layout, Typography, Button } from 'antd';
import { Tags } from '../Components/Tags'
import { Sort } from '../Components/Sort'
import  { cards } from '../Components/CardData'
import { connect } from 'react-redux';
import { reduxState } from '../redux/types';
import { RouteComponentProps } from 'react-router-dom';
import { changePagePathAction } from '../redux/actions';

const { Title } = Typography;
const { Content, Header } = Layout;

interface FilterPageProps extends RouteComponentProps {
    changePagePathAction: (attribute:string) => void
    activeTags: string[]
    sort: string
}

class FilterPage extends React.Component<FilterPageProps> {
    constructor(props:FilterPageProps) {
        super(props)
    }
    render() {
        let renderCards: JSX.Element[] = []
        this.sortCards(cards)
        cards.map(card => card.props.tags.some(tag => this.props.activeTags.includes(tag)) ? renderCards.push(card.jsx) : renderCards)
        const renderArray = this.renderGridOfCards(renderCards, 4)
        return(
            <Layout style={{ minHeight: '100vh', marginLeft:"1em", marginRight:"1em" }}> 
                <Header className="site-layout-background" style={{ padding: 0, paddingTop: 20, backgroundColor:"white"}}>
                    <Title> Projects </Title>   
                </Header>
                <Header className="site-layout-background" style={{ padding: 0, backgroundColor:"white"}}>
                    <Tags/>   
                    <Sort/>    
                </Header>
                <Layout className="site-layout" /*style={{backgroundColor:"white"}}*/>
                <Content style={{ margin: '0 0px', backgroundColor:"white" }}>
                    {/* <Title> Projects </Title>   */}
                    <div className="site-layout" style={{ padding: 12, minHeight: 360 }}>
                        <div className="FilterPage" /*style={{marginLeft:"10em", marginRight:"10em"}}*/>  
                            <Button shape="round" style={{margin:"1em"}} onClick={() => this.goToNewPage("/")}> Home </Button>                              
                            {renderArray.map(item => (item))}
                        </div>
                    </div>
                </Content>
                </Layout>
            </Layout>
        )
    }
    sortCards(array:any[]) {
        const { sort } = this.props;
        switch(sort) {
            case "title":
                cards.sort((a, b) => (a.props.title > b.props.title) ? 1 : -1)
                break
            case "description":
                cards.sort((a, b) => (a.props.description > b.props.description) ? 1 : -1)
                break
            default:
                cards.sort((a, b) => (a.props.title > b.props.title) ? 1 : -1)
                break
        }
        
    }
    renderGridOfCards(array:any[], col:number):JSX.Element[] {
        var i,j,currentChunk,chunk = col;
        let renderArray = []
        for (i=0,j=array.length; i<j; i+=chunk) {
            currentChunk = array.slice(i,i+chunk);
            renderArray.push(
                <Row key={i} gutter={[16, 16]}>
                    {currentChunk.map((card, index) => (<Col key={index} span={24/col} xs={24} md={12} lg={8} xl={6}> {card} </Col>))}
                </Row>
            )
        }
        return renderArray
    }
    goToNewPage = (path:string) => {
        this.props.history.push(path);
    };
}

function mapStateToProps(state:reduxState) {
    return {
        activeTags: state.activeTags,
        sort: state.sort
    }
}
// Map redux actions to component props
function mapDispatchToProps(dispatch: any) {
    return {
        changePagePathAction: (attribute:string) => dispatch(changePagePathAction(attribute))
    }
}

// The Hight Order Component (HOC)
// props need to be recived by the component
const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterPage);
export { connectedComponent as FilterPage };