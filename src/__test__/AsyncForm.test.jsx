import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import AsyncForm from "../AsyncForm"

test('rendering and submiting basic FORMIK', async () => {
  const handleSubmit = jest.fn()
  render(<AsyncForm onSubmit={handleSubmit} />)


  userEvent.type(screen.getByLabelText(/first name/i), "Haydar")
  userEvent.type(screen.getByLabelText(/last name/i), "Cetin")
  userEvent.type(screen.getByLabelText(/email/i), "haydar.cetin@mail.com")

  userEvent.click(screen.getByRole('button', { name: 'Send' }))

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      firstName: 'Haydar',
      lastName: 'Cetin',
      email: 'haydar.cetin@mail.com'
    })
  )


})