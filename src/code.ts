import { Point, Points } from './sample'

const main = () => {
    const points = [new Point(200, 300), new Point(200, 100), new Point(100, 100)]
    const sum = new Points(points)
    console.log(sum.sum())
}
