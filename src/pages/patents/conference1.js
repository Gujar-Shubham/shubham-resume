import React from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiText, EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiLink, EuiPageTemplate, EuiPageHeader } from '@elastic/eui';
import styled from 'styled-components';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-gap: 0 10px;
    padding: 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '• ';
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
class Conference1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            isModalVisible: false,
            files: {},
            uploadDisabled: true,
            selection: [],
            columns: [],
            AlertText: "",
            AlertType: "error",
            skills: ["Deep learning", "Data Analysis", "Research Machine", "Learning Innovation", "Rational     Analytics", "Multi-Disciplinary", "CNN", "AI", "Computer vision"],
            patent1Key: ['Unique dataset of Concrete Mix', 'Incorporates mathematical stability, dimensional homogeneity & reduction', 'Rational input parameters using wise learning protocol', 'Feature Engineering based on Artificial Wisdom', 'Hybrid-MDA- ANN Concrete strength prediction model', 'Deployment as Android and Web APP', 'Comparison with DL, ML & regression methods'],
            patent1Value: ['Innovation', 'Problem solving', 'Multi-disciplinary Engg', 'Artificial Wisdom'],
            conference1Research:['Automatic Bird Species Classification using Transfer Learning based CNN'],
            conference1Project:['Successful classification of 200 bird species ','96% Testing accuracy by VGG16 ','Implemented VGG16, ResNet50, MobileNet architectures','Deployed as Android App ','Presented in IACC-21 conference'],
            conference1Value:['Social Impact','Applied Research'],
            conference2Research:['AI based Brand marketing by Automatic Text Generation and Image Recommendation on Twitter'],
            conference2Project:['Innovative concept','YoloV4 based image detection and generated text-based recommendation','Based on supermarket sales data','NLG based automated text generation','Deployment as web app with twitter compatible'],
            conference2Value:['Market Research','Automation'],
            conference3Research:['Automatic Indian Vehicles Detection and Monitoring using CCTV systems for Indian Toll Plazas and Traffic stations'],
            conference3Project:['Acquisition of a dataset for Indian Vehicle and surroundings','78% mAP after fine-tuning the YOLOV3 model','Implementation of YOLOV3 & YOLOV4.','Research publication recognition','Extending Vehicle Classification based on vehicle axle count'],
            conference3Value:['Problem Solving','Innovation']
          
            
    }
    }

    render() {

        return (
            <>
                <EuiPageTemplate>
                    <EuiPageHeader><Header /></EuiPageHeader>
                <EuiFlexGroup gutterSize='xl'>
                <EuiFlexItem>
                        <EuiSpacer />
                        <EuiText><h2><font face='Segoe UI'>1)	A Deep Learning-Based Transfer Learning Approach for Bird Species Classification
                        <EuiLink href="https://doi.org/10.1007/978-981-16-0404-1_4" target="_blank" /></font></h2></EuiText>
                        <EuiSpacer size='m' />
                        <EuiText><h5><font face='Segoe UI'>
                        May 2020 – December 2020</font></h5></EuiText>
                        <EuiSpacer size='m' />
                        <EuiText><b>Research Objectives</b> 
                        <StyledText><ul className="skills-list">
                        {this.state.conference1Research && this.state.conference1Research.map((p, i) => <li key={i}>{p}</li>)}
                        </ul></StyledText>
                        <b>Project Highlights</b>
                        <StyledText><ul className="skills-list">
                        {this.state.conference1Project && this.state.conference1Project.map((p, i) => <li key={i}>{p}</li>)}
                        </ul></StyledText>
                        <b>Value Additions</b>
                        <StyledText><ul className="skills-list">
                        {this.state.conference1Value && this.state.conference1Value.map((p, i) => <li key={i}>{p}</li>)}
                        </ul></StyledText>
                        </EuiText>
                </EuiFlexItem>
                </EuiFlexGroup>
            <Footer /></EuiPageTemplate>
            </>
        )
    }
};

export { Conference1}