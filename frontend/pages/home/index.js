import React from 'react';
import Search20 from "@carbon/icons-react/lib/search/20";
import StoryContent from './[content]';
import Link from 'next/link';
import { Logout32, Upload24, UserProfile24, Settings24, Education } from '@carbon/icons-react';
    import {
      Content,
      HeaderNavigation,
      HeaderMenuItem,
      HeaderMenu,
      HeaderContainer,
      HeaderMenuButton,
      Header,
      HeaderName,
      HeaderGlobalAction,
      HeaderGlobalBar,
      SideNav,
      SideNavItems,
      SideNavLink,
      SkipToContent,
    } from "carbon-components-react/lib/components/UIShell";
import { Router } from 'next/router';

    


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
                <HeaderNavigation aria-label="IBM ">
                <HeaderMenuItem href="#">Help</HeaderMenuItem>
                <HeaderMenuItem href="#">Donate</HeaderMenuItem>
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
                  <HeaderGlobalAction aria-label="Logout"  onClick={() => {}}>
                    <Logout32 style={{"margin-right": "15px" }}/>
                  </HeaderGlobalAction>
                </HeaderGlobalBar>
                <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
                  <SideNavItems>
                  <SideNavLink  renderIcon={UserProfile24} onClick={() => {this.showPage('profile')}} >
                      
                      {/* <UserProfile24 />*/}
                      <h4>Profile</h4> 
                    </SideNavLink>
                  <SideNavLink renderIcon={Settings24} onClick={() => {this.showPage('settings')}}>
                      <h4>Settings</h4> 
                    </SideNavLink>
                  <SideNavLink renderIcon={Upload24} onClick={() => {this.showPage('upload')}}>
                      <h4>Upload Material</h4>
                    </SideNavLink>
                  
                    {/* <SideNavMenu renderIcon={Fade16} title="Category title">
                      <SideNavMenuItem href="javascript:void(0)">
                        Link
                      </SideNavMenuItem>
                      <SideNavMenuItem
                        aria-current="page"
                        href="javascript:void(0)"
                      >
                        Link
                      </SideNavMenuItem>
                      <SideNavMenuItem href="javascript:void(0)">
                        Link
                      </SideNavMenuItem>
                    </SideNavMenu> */}
                    {/* <SideNavMenu renderIcon={Fade16} title="Category title">
                      <SideNavMenuItem href="javascript:void(0)">
                        Link
                      </SideNavMenuItem>
                      <SideNavMenuItem
                        aria-current="page"
                        href="javascript:void(0)"
                      >
                        Link
                      </SideNavMenuItem>
                      <SideNavMenuItem href="javascript:void(0)">
                        Link
                      </SideNavMenuItem>
                    </SideNavMenu> */}
                    {/* <SideNavMenu renderIcon={Fade16} title="Category title">
                      <SideNavMenuItem href="javascript:void(0)">
                        Link
                      </SideNavMenuItem>
                      <SideNavMenuItem
                        aria-current="page"
                        href="javascript:void(0)"
                      >
                        Link
                      </SideNavMenuItem>
                      <SideNavMenuItem href="javascript:void(0)">
                        Link
                      </SideNavMenuItem>
                    </SideNavMenu> */}
                    
                  </SideNavItems>
                </SideNav>
              </Header>
              <Link href={'/home/' + this.state.pagename}>
                <StoryContent /> 
              </Link>
              {/* Here i'm going to have links instead of story content */}
            </>
          )}
        />
      </div>)}
              
  }

export default  Home;