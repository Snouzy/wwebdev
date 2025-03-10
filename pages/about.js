import React from 'react'
import styled from 'styled-components'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import * as ui from '../ui'
import { breakpointLarge, darkGrey } from '../ui/constants'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

const $CardContent = styled(CardContent)`
  padding: 36px !important;

  h1 {
    margin-top: 0;
    color: ${darkGrey};
    text-align: center;
  }
`

const $Flex = styled.div`
  display: flex;

  @media (max-width: ${breakpointLarge}) {
    flex-direction: column;
    align-items: center;
  }

  img {
    border-radius: 100%;
    margin-right: 36px;
    max-width: 150px;

    @media (max-width: ${breakpointLarge}) {
      margin-right: 0;
      margin-bottom: 18px;
    }
  }
`

const About = () => (
  <Layout
    title="About"
  >
    <ui.Container>
      <Card>
        <$CardContent>
          <$Flex>
            <div>
              <ui.SectionHeadline>About</ui.SectionHeadline>
              <img src="/me.jpg" alt="picture of vincent will" />
            </div>
            <div>
              <p>
                <i>wweb.dev</i> - That's actually just me.
              </p>
              <p>
                Originally I started writing about web stuff in 2018 on my personal
                page <a href="https://vincentwill.com" target="_blank" rel="noopener">vincentwill.com</a>.
                Later (mid/end of 2019) I moved everything related to web-development
                to <i>wweb.dev</i>, as I wanted to separate it from my other content.
              </p>
              <p>
                It's important to me to keep this website privacy-friendly,
                free, and <a  href="https://github.com/wwebdev" target="_blank" rel="noopener">open-source</a>.
                I would be super happy if you could <a href="https://app.sponsor.ninja/projects/63d7dd38d907a8ed61dca67f" target="_blank" rel="noopener">support me in doing so</a>.
              </p>
              <p>
                If you want to get in touch, feel free to pass me a message on <a href="mailto:info@wweb.dev">info@wweb.dev</a> or
                on Twitter <a href="https://twitter.com/wweb_dev" target="_blank" rel="noopener">@wweb_dev</a>.
              </p>
              <p>
                Cheers,<br />
                Vincent
              </p>
            </div>
          </$Flex>
        </$CardContent>
      </Card>
    </ui.Container>
  </Layout>
)

export default About
