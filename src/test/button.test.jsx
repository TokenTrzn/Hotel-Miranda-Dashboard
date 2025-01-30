import { render } from '@testing-library/react'
import { BookingItemSpecialRequestStyled, BookingItemStatusStyled } from '../bookings/components/Ui/BookingsStyled'

describe('Special Request Button', () => {
    test('El fondo debe ser blanco y el texto y borde verdes si el type es true', () => {
        const { getByText } = render(<BookingItemSpecialRequestStyled type='true'>View Notes</BookingItemSpecialRequestStyled>)
        const button = getByText('View Notes')
        expect(button).toHaveStyle('background: #ffffff', 'color: #799283', 'border: 1px solid #799283')
    })

    test('El fondo debe ser verde, el texto negro y borde none si el type es false', () => {
        const { getByText } = render(<BookingItemSpecialRequestStyled type='false'>View Notes</BookingItemSpecialRequestStyled>)
        const button = getByText('View Notes')
        expect(button).toHaveStyle('background: #EEF9F2', 'color: #000000', 'border: none')
    })
})

describe('Status Button', () => {
    test('El fondo debe ser verde claro y el texto verde oscuro si el type es Check In', () => {
        const { getByText } = render(<BookingItemStatusStyled type='Check In'>Check In</BookingItemStatusStyled>)
        const button = getByText('Check In')
        expect(button).toHaveStyle('background: #E8FFEE', 'color: #5AD07A')
    })

    test('El fondo debe ser rojo claro y el texto rojo oscuro si el type es Check Out', () => {
        const { getByText } = render(<BookingItemStatusStyled type='Check Out'>Check Out</BookingItemStatusStyled>)
        const button = getByText('Check Out')
        expect(button).toHaveStyle('background: #FFEDEC', 'color: #E23428')
    })

    test('El fondo debe ser amarillo claro y el texto negro si el type es In Progress', () => {
        const { getByText } = render(<BookingItemStatusStyled type='In Progress'>In Progress</BookingItemStatusStyled>)
        const button = getByText('In Progress')
        expect(button).toHaveStyle('background: #F3FFC0', 'color: #000000')
    })
})