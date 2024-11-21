/* Write your CSS here */
import styled from 'styled-components/macro'

export const ProjectDetailsContainer = styled.div`
width:70%;
height:70%;
margin-top:7px;
margin-bottom:7px;

`
export const ProjectImage = styled.img`
height:100%;
width:100%;
`
export const ProjectTitleAndDurationContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:flex-start;
`
export const ProjectTitle = styled.h1`
font-size:25px;
font-weight:800;
font-family:'roboto;
line-height:1.5;
`
export const DurationContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;`

export const Duration = styled.p`
color:#171f46;
font-family:'roboto;
font-size:15px;
font-weight:700;
line-height:1.2;
margin-left:4px;
`

export const ProjectDescription = styled.p`
font-size:20px;
font-weight:500;
font-family:'roboto';
line-height:1.5;
color:#1e293b;
`
export const VisitLink = styled.a`
text-align:center;
color:#8967d2;
font-family:'roboto';
font-weight:600;
line-height:1.2;
text-decoration:none;
margin-top:5px;
`
