import { getDaysBetweenDates } from './Date'

describe('Date utils', () => {
    it('should return 1', () => {
        const res = getDaysBetweenDates(
            new Date('10-10-2023'),
            new Date('10-11-2023')
        )
        expect(res).toBe(1)
    })

    it('should return 6', () => {
        const res = getDaysBetweenDates(
            new Date('10-10-2023'),
            new Date('10-16-2023')
        )
        expect(res).toBe(6)
    })

    it('should return 0', () => {
        const res = getDaysBetweenDates(
            new Date('10-10-2023'),
            new Date('10-10-2023')
        )
        expect(res).toBe(0)
    })
})
