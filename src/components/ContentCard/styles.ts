import styled from 'styled-components'

export const ContentCardWrapper = styled.div`
  margin-bottom: 0;
`
export const ContentCardLeftText = styled.div``
export const ContentCardRowWrapper = styled.div``
export const ContentCardColumnWrapper = styled.div`
  &.content-card-img {
    margin-bottom: 15px;

    img {
      border-radius: 30px;
      border-width: 6px;
      border-style: inset;
      border-block-style: none;
    }
  }
`
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
export const ContentCardTextList = styled.div`
  &.content-card-text-list {
    display: flex;

    img {
      width: 50px;
      height: 50px;
    }
    p {
      margin-left: 15px;
      font-size: 1.1rem;
      line-height: 1.5rem;
      align-self: flex-end;
    }
  }
`
export const ContentCardLink = styled.a`
  &.content-card-link {
    position: relative;
    display: inline-block;
    text-decoration: none;
    margin-top: 15px;
  }
`
