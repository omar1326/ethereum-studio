import React, { Component } from 'react';
import Topbar from '../../topbar';
import style from './style.less';
import { SideMenu, SideMenuItem, SideMenuFooter } from '../../sideMenu';
import { IconConfigure, IconDeploy, IconBack } from '../../icons';

interface IProps {
    location: any;
    match: any;
    content: JSX.Element;
}

export default class OrganizationSettings extends Component<IProps> {

    render() {
        const { content } = this.props;
        const { pathname } = this.props.location;

        return (
            <div className={style.organizationSettings}>
                <Topbar />
                <div className={style.content}>
                    <SideMenu>
                        <SideMenuItem
                            icon={<IconDeploy />}
                            title='Details'
                            active={pathname.includes('details')}
                            linkTo={`/${this.props.match.params.organizationId}/${this.props.match.params.projectId}/build`}
                        />
                        <SideMenuItem
                            icon={<IconDeploy />}
                            title='People'
                            active={pathname.includes('people')}
                            linkTo={`/${this.props.match.params.organizationId}/${this.props.match.params.projectId}/build`}
                        />
                        <SideMenuFooter>
                            <SideMenuItem
                                icon={<IconBack />}
                                title='Back to dashboard'
                                linkTo={`/${this.props.match.params.organizationId}/`}
                            />
                        </SideMenuFooter>
                    </SideMenu>
                    <div className={style.pageContent}>
                        {content}
                    </div>
                </div>
            </div>
        );
    }
}
