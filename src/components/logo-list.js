import * as React from 'react'
import { graphql } from 'gatsby'
import {
  Container,
  Section,
  FlexList,
  Logo
} from './ui'

function LogoItem (props) {
  if (!props.image) return false

  return (
    <Logo
      alt={props.alt}
      image={props.image}
      size='medium'
    />
  )
}

export default function LogoList (props) {
  return (
    <Section>
      <Container width='narrow'>
        <FlexList gap={5} variant='center'>
          {props.logos.map(logo => logo && (
            <li key={logo.id}>
              <LogoItem {...logo} />
            </li>
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageLogoListContent on HomepageLogoList {
    id
    logos {
      id
      alt
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
