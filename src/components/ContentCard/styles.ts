import styled from 'styled-components'

export const ContentCardWrapper = styled.div``
export const ContentCardLeftText = styled.div``
export const ContentCardRowWrapper = styled.div``
export const ContentCardColumnWrapper = styled.div``
export const ContentCardEyeBrow = styled.span`
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 500;
  text-transform: uppercase;
  display: block;
  line-height: 1em;
  margin-bottom: 15px;

  .bor-header {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    top: -3px;
    border-radius: 10px;
    height: 3px;
    width: 35px;

    &.bor-right {
      margin-right: 0;
      margin-left: 9px;
    }
  }
`
export const ContentCardLink = styled.a`
  &.content-card-link {
    position: relative;
    display: inline-block;
    text-decoration: none;

    ::after {
      content: '>>';
      padding-left: 5px;
    }
  }
`
