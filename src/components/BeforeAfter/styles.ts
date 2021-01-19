import styled from 'styled-components'

export const Wrapper = styled.main``
export const CardImageOverlayWrapper = styled.div`
  pointer-events: none;

  span {
    font-size: 16px;
    left: 50%;
    padding: 7px 15px;
    position: absolute;
    top: 100%;
    transform: translate(-50%, -50%);
  }
`

export const CardWrapper = styled.div`
  border-radius: 12px;
  border-width: 6px;
  border-style: inset;
  border-block-style: none;
`
