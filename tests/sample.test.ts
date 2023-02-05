import { describe, expect, test } from '@jest/globals'
import { Point, Points } from '../src/sample'

describe('Points', () => {
    test('sum of empty list', () => {
        const points = [new Point(0, 0)]
        const a = new Points(points)
        expect(a.sum()).toEqual({ x: 0, y: 0 })
    })

    test('sum of single point', () => {
        const points = [new Point(1, 2)]
        const a = new Points(points)
        expect(a.sum()).toEqual({ x: 1, y: 2 })
    })

    test('sum of multiple points', () => {
        const points = [new Point(1, 2), new Point(3, 4), new Point(3, 4)]
        const a = new Points(points)
        expect(a.sum()).toEqual({ x: 7, y: 10 })
    })
})
