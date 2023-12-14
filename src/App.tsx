import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello</h1>
      <Button variant="primary"></Button>
      <Button variant="secundary"></Button>
      <Button variant="danger"></Button>
      <Button variant="primary"></Button>
      <Button></Button>

      <GlobalStyle />
    </ThemeProvider>
  )
}
