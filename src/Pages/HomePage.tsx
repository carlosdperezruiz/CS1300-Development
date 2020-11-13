import React from 'react';

import { Layout, Menu, Anchor, Image, Typography, Divider, Row, Col, Space, Button } from 'antd';
import { RouteComponentProps } from 'react-router-dom';
import { reduxState } from '../redux/types';
import { changePagePathAction } from '../redux/actions';
import { connect } from 'react-redux';

const { Link } = Anchor;
const { Header, Content, Sider } = Layout;
const { Text, Title, Paragraph } = Typography;

interface HomePageProps extends RouteComponentProps {
  changePagePathAction: (attribute:string) => void
}

class HomePage extends React.Component<HomePageProps>  {
  constructor(props:HomePageProps) {
    super(props)
    this.props.changePagePathAction('/')
  }
  render()    {
    return (
      <div className="App">
        <Layout>
          <Header className="header" style={{height:"min-content"}}>
              <Title>Development</Title>
          </Header>
          <Content>
            <Layout className="site-layout-background" style={{textAlign:"left"}}>
              <SideBar/>
              <Content style={{ padding: '0 74px', minHeight: 280 }}>
                CONTENT
                <Button shape="round" style={{margin:"1em"}} onClick={() => this.goToNewPage("/Filter")}> Fitler </Button>
              </Content>
            </Layout>
            <Divider/>
          </Content>
        </Layout>
      </div>
    );
  }

  goToNewPage = (path:string) => {
    this.props.history.push(path);
  };
}

function SideBar() {
  if(window.screen.width < 820) { return(<div/>) }
  return (
    <Sider className="site-layout-background" width={200}>
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', padding: "12px" }}
    >
    <Anchor affix={true}>
      <Link href="#introduction" title="Introduction" />
      <Link href="#testing" title="Testing" />
      <Link href="#nullhyp" title="Null Hypothesis" />
      <Link href="#dataproc" title="Data Processing" />
      <Link href="#results" title="Results" />
    </Anchor>
    </Menu>
  </Sider>
  );
}

function imageFunction(name: string, size: string | number | undefined) {
  return(
    <Image
      width={size}
      src={process.env.PUBLIC_URL + "/img/" + name}
      className="img"
    />
  )
}

// Map redux state to component state
function mapStateToProps(state:reduxState) {
  return {
      pagePath:state.pagePath
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
)(HomePage);
export { connectedComponent as HomePage };