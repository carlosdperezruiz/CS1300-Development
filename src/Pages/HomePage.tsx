import React from 'react';

import { Layout, Menu, Anchor, Image, Typography, Divider, Button } from 'antd';
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
                {this.renderIntroduction()}
                {renderUserScenario()}
                {renderDesign()}
                {renderLinks()}
                <div style={{display:"table", margin:"0 auto"}}><Button shape="round" style={{margin:"1em"}} onClick={() => this.goToNewPage("/Filter")}>Visit Prototype</Button></div>
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

  renderIntroduction() {
    return(
      <div id="introduction">
        <Title level={2} style={{textAlign:"center"}}><Text>Doctor Search App Built With React</Text></Title>
        <div style={{display:"table", margin:"0 auto"}}><Button shape="round" style={{margin:"1em"}} onClick={() => this.goToNewPage("/Filter")}>Visit Prototype</Button></div>
        <Divider><Title level={3} style={{textAlign:"center"}}><Text keyboard>Introduction</Text></Title></Divider>
        <Paragraph>
          When we need to see a doctor, the immediate "what do I do" response varies, with many electing to not see the doctor at all. From prior user research, I found that many users didn't know how to navigate their health insurance and didn't know which doctors in their area would accept their insurance. So for this project, I prototyped a search page for a webapp that could help users find a doctor.
        </Paragraph>
      </div>
    );
  }
}

function renderUserScenario() {
  return(
    <div id="userscenario">
      <Divider><Title level={3} style={{textAlign:"center"}}><Text keyboard>User Scenario</Text></Title></Divider>
      <Paragraph>
        Since this is a protoype of a page within an app, context may be helpful. Imagine a young adult, who recently got their own health insurance, found this website. In the past, they called their parents whenever they needed to visit a doctor and their parents would setup an appointment for them. So, since they are on their own now, this website feels like  a viable replacement. The user signs up and enters some details: the city they live in, health insurance provider, and the specific plan they are covered under. So now, when they visit the site, they can see which doctors are nearby, which are in network, and other important information. With this directory, they'll feel more confident in finding the right doctor to visit. 
      </Paragraph>
    </div>
  );
}

function renderDesign() {
  return(
    <div id="design">
      <Divider><Title level={3} style={{textAlign:"center"}}><Text keyboard>Design</Text></Title></Divider>
      <div style={{display:"table", margin:"0 auto"}}>{imageFunction("screencapture.png", 600)}</div>
      <Paragraph/>
      <Paragraph>
        The design of the page is meant to be simple to navigate and preemptively underwhelming. Since the user scenario highlights feelings of confusion and being overwhelmed by health insurance and appointment process, the protoype emphasizes the important information of a doctor on an individual card. In the hypothetical webapp, each card would be clickable and would navigate the user to a doctor profile page. The hierarchy of the page was also intentionally layed out so the user sees the filtering and sorting options early on when first visitng the site (since they are at the top of the page), and the cards have call to action buttons, which for this prototype, adds the doctor to a favorite list on the side.  
      </Paragraph>
    </div>
  );
}

function renderLinks() {
  return(
    <div id="links">
      <Divider><Title level={3} style={{textAlign:"center"}}><Text keyboard>Development</Text></Title></Divider>
        <Paragraph>
          I used <Text strong underline><a href="https://reactjs.org/" rel="noreferrer" target="_blank">React</a></Text>, <Text strong underline><a rel="noreferrer" href="https://redux.js.org/" target="_blank">Redux</a></Text>, and <Text strong underline><a rel="noreferrer" href="https://ant.design" target="_blank">Ant Design</a></Text> to prototype this project. The source code can be found on GitHub <Text strong underline><a href="https://github.com/carlosdperezruiz/CS1300-Development" rel="noreferrer" target="_blank">here</a></Text>.
        </Paragraph>
    </div>
  );
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
      <Link href="#userscenario" title="User Scenario" />
      <Link href="#design" title="Design" />
      <Link href="#links" title="Development" />
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