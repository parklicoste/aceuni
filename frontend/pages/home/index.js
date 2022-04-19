import React from 'react';
import Search20 from "@carbon/icons-react/lib/search/20";
import StoryContent from './story';
import Link from 'next/link';
import { Logout32, Upload24, UserProfile24, Settings24, Education, Search24 } from '@carbon/icons-react';
import {Content, HeaderNavigation, HeaderMenuItem, HeaderMenu, HeaderContainer, HeaderMenuButton, Header, HeaderName, HeaderGlobalAction, HeaderGlobalBar, SideNav, SideNavItems, SideNavLink, SkipToContent,} from "carbon-components-react/lib/components/UIShell";
import SearchResult from './search';
// import { Router } from 'next/router';
// import { ThisSideUp16 } from '@carbon/icons-react';
// import MainLayout from '../components/layout/main';
// import DefaultLayout from '../components/layouts/default';

    
// export function Layout({ Component, pageProps }) {
  
//   return Layout = Component.Layout || EmptyLayout;
// }
// const EmptyLayout = ({children}) => <>{children}</>;
// export default MyPage

class Home extends React.Component{
    
  constructor(props)
  {
      super(props);

      this.state = {
          pagename: "",
      }
  }

  showPage(name) {
    this.setState({
      pagename: name
    })
  }

    render(){
      // const { Component, pageProps } = this.props;
      // const MainLayout = Component.Layout || DefaultLayout;

        return (<div className="container">
        
        <HeaderContainer
          render={({ isSideNavExpanded, onClickSideNavExpand }) => (
            <>
              <Header aria-label="aceuni">
                <SkipToContent />
                <HeaderMenuButton
                  aria-label="Open menu"
                  onClick={onClickSideNavExpand}
                  isActive={isSideNavExpanded}
                />
                <HeaderName href="/home" renderIcon={Education}  prefix="">
                  ACEUNI
                </HeaderName>
                <HeaderNavigation aria-label="aceuni">
                <HeaderMenuItem href="/home/help">Help</HeaderMenuItem>
                <HeaderMenuItem href="/home/search">Donate</HeaderMenuItem>
                <HeaderMenu aria-label="univerities" menuLinkName="Univerities">
                      <HeaderMenuItem href="#">Carleton University</HeaderMenuItem>
                      <HeaderMenuItem href="#">UOttawa</HeaderMenuItem>
                      <HeaderMenuItem href="#">Algonquin</HeaderMenuItem>
                    </HeaderMenu>
                <HeaderMenu aria-label="courses" menuLinkName="Courses">
                    <HeaderMenuItem href="#">COMP4004</HeaderMenuItem>
                    <HeaderMenuItem href="#">COMP1001</HeaderMenuItem>
                    <HeaderMenuItem href="#">COMP1005</HeaderMenuItem>
                    </HeaderMenu>
                    
                  </HeaderNavigation>
                <HeaderGlobalBar>
                  {/* <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                    <Search20 />
                  </HeaderGlobalAction> 
                  <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
                    <Notification20 />
                  </HeaderGlobalAction> */}
                  <HeaderGlobalAction aria-label="Logout" href="/login/" onClick={() => {}}>
                    <Logout32 />
                     {/* style={{marginRight: "15px" }}/> */}
                  </HeaderGlobalAction>
                </HeaderGlobalBar>
                <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
                  <SideNavItems>
                  <SideNavLink  renderIcon={Search24} href="/home/search/" onClick={() => {this.showPage('profile')}} >
                      
                      {/* <UserProfile24 />*/}
                      <h4>Search</h4> 
                    </SideNavLink>
                  <SideNavLink  renderIcon={UserProfile24} href="/home/profile/" onClick={() => {this.showPage('profile')}} >
                      
                      {/* <UserProfile24 />*/}
                      <h4>Profile</h4> 
                    </SideNavLink>
                  <SideNavLink renderIcon={Settings24} href="/home/settings/" onClick={() => {this.showPage('settings')}}>
                      <h4>Settings</h4> 
                    </SideNavLink>
                  <SideNavLink renderIcon={Upload24} href="/home/upload/" onClick={() => {this.showPage('upload')}}>
                      <h4>Upload Material</h4>
                    </SideNavLink>
                  
                  </SideNavItems>
                </SideNav>
              </Header>
              {/* <Layout>
                {this.props.Layout}
              </Layout> */}
              {/* <Link href={'/home/' + this.state.pagename}> */}
                <StoryContent /> 
              {/* <SearchResult style={{margin: "100px 300px 0 300px"}} /> */}
              {/* </Link> */}
              {/* Here i'm going to have links instead of story content */}
            </>
          )}
        />
      </div>)}
              
  }

export default  Home;