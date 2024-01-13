// 
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test ("header render with correct text", () => {
  render(<App />)
  const headerEl = screen.getByRole('heading')
  expect(headerEl.textContent).toBe("Testing Playground")
})

describe('test for the button', () => {
test ("button changes color when clicked", async () => {
  render(<App />)
  const colorBtn = screen.getByRole("button")
  
  await userEvent.click(colorBtn)

  expect(colorBtn).toHaveStyle({ backgroundColor: "blue"})
  expect(colorBtn.textContent).toBe("Change button color to green")
})
})

describe ('test for the checkbox', () => {
  test("checkbox disables button when first clicked, then enables on second click", () => {
    render(<App/>)
    const colorBtn = screen.getByRole("button")
    const checkbox = screen.getByRole("checkbox")
  
    userEvent.click(checkbox)
    expect(colorBtn).toBeDisabled()
  
    userEvent.click(checkbox)
    expect(colorBtn).toBeEnabled()
  })
  })

test("button is enable to appear when button is enabled or disabled", async () => {
  render(<App />)
  const checkbox = screen.getByRole("checkbox")
  const paragraphEl = screen.getByRole("paragraph")

  expect(paragraphEl.textContent).toBe("Button is enabled")

  await  waitFor(() => {
  userEvent.click(checkbox)
  expect(paragraphEl.textContent).toBe("Button is disabled")
  });

  await  waitFor(() => { 
  userEvent.click(checkbox)
  expect(paragraphEl.textContent).toBe("Button is enabled")
})
})
