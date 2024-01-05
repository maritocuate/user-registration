import styled from 'styled-components'

export const Input = styled.input`
  display: block;
  width: 100%;
  border-radius: 0.25rem;
  border-width: 0;
  padding: 0.6rem;
`

export const Select = styled.select`
  display: block;
  width: 100%;
  border-radius: 0.25rem;
  border-width: 0;
  padding: 0.6rem;
`

export const Submit = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 0.25rem;
  border-width: 0;
  padding: 0.6rem 0.3rem;
  margin-top: 1rem;
  background-color: darkred;
  color: white;
`

export const Error = styled.p`
  background: red;
  padding: 0.5rem;
  color: white;
  margin: 0;
  font-size: small;
`
