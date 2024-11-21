/* Write your CSS here */
import styled from 'styled-components/macro'

export const CourseTitleAndDurationContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:flex-start;
`
export const CourseTitle = styled.h1`
font-family:'robot';
font-size:29px;
font-weight:700;
line-height:1.3;
margin:0px;
`
export const DurationContainer = styled.div`
display:flex;
jutify-content:center;
align-items:center;`
export const Duration = styled.p`
font-family:'roboto;'
font-weight:800;
font-size:20px;
line-height:1.2;
color:green;`
export const CourseDescription = styled.p`
font-weight:800;
font-family:'roboto';
font-size:30px;
line-height:1.3;
color:#171f46;
`
export const CourseTagsList = styled.ul`
display:flex;
flex-wrap:wrap;
align-items:center;
padding:0px;margin:0px;
`
export const CourseTagItem = styled.li`
life-style-type:none;
`
export const CourseTag = styled.p`
font-weight:800;
font-family:'roboto';
font-size:20px;
line-height:1.2;
color:#171f46;
`
