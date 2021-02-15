import React from 'react'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { useStaticQuery, graphql } from 'gatsby'
import * as R from 'ramda'

const Experiences = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allExperiences {
          edges {
            node {
              tech
              timeline
              id
              company
              job_title
            }
          }
        }
      }
    `
  )
  const experiences: any[] = R.pathOr([], ['allExperiences', 'edges'], data)

  if (!experiences.length) return null

  return (
    <>
      <Timeline align="alternate">
        {experiences
          .map((x) => x.node)
          .map((x, i) => (
            <TimelineItem key={`${x.company}-${i}`}>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  {x.timeline}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className="py-2 px-4">
                  <Typography variant="h6" component="h1">
                    {x.company}
                  </Typography>
                  <Typography>{x.job_title}</Typography>
                  <hr />
                  <Typography variant="caption">{x.tech}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
      </Timeline>
    </>
  )
}

export default Experiences
