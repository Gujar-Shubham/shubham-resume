import React from 'react';
import {
    EuiHeader,
    EuiHeaderLogo,
    EuiHeaderSectionItem,
    EuiHeaderLinks,
    EuiHeaderLink,
} from '@elastic/eui';
import logo from "../../logos/sg-logo (1).svg"
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 'fixed',
            isPopoverOpen: false,
            color: "white"
        }
    }

    onClick = () => {
        let isPopoverOpen = this.state.isPopoverOpen
        this.setState({
            isPopoverOpen: !isPopoverOpen
        })
    }

    closePopover = () => {
        this.setState({
            isPopoverOpen: false
        })
    }
    
    componentDidMount() {
        if(window.innerWidth<700){
            this.setState({
                color: "black"
            })
        }
    }

    render() {
        const renderLogo = (
            <><EuiHeaderLogo
                iconType={ logo }
                href="/about"
            ><font style={{color: 'white'}}>Shubham Gujar</font></EuiHeaderLogo></>
        );

        // const renderTitle = (
        //     <EuiHeaderSectionItemButton>
        //         <EuiText textAlign='center'><h2><font face='Courier New' >Finalytics</font></h2></EuiText>
        //     </EuiHeaderSectionItemButton>
        // )
    
        const renderUser = (
            <EuiHeaderSectionItem border='none'>
                <EuiHeaderLinks><h7>
                    <EuiHeaderLink size='xs' href="/about" style={{color:this.state.color}}>About Me</EuiHeaderLink>
                    <EuiHeaderLink size='xs' href="/research" style={{color:this.state.color}}>Research</EuiHeaderLink>
                    <EuiHeaderLink size='xs' href="/publications" style={{color:this.state.color}}>Publications</EuiHeaderLink>
                    <EuiHeaderLink size='xs' href="/projects" style={{color:this.state.color}}>Projects</EuiHeaderLink>
                    <EuiHeaderLink size='xs' href="/work" style={{color:this.state.color}}>Work Experience</EuiHeaderLink>
                    <EuiHeaderLink size='xs' href="/education" style={{color:this.state.color}}>Education</EuiHeaderLink>
                    <EuiHeaderLink size='xs' href="/people" style={{color:this.state.color}}>People</EuiHeaderLink>
                    <EuiHeaderLink size='xs' href="/contact" style={{color:this.state.color}}>Contact</EuiHeaderLink></h7>
                </EuiHeaderLinks>
            </EuiHeaderSectionItem>
        );
    
        const sections = [
            {
                items: [renderLogo],
                borders: 'right',
            },
            {
                items: [renderUser]
            },]

        return (
            <>
                <EuiHeader position={ this.state.position } sections={ sections } style={{backgroundColor: '#2774AE'}} />
            </>
        );
    }
}

export { Header }
