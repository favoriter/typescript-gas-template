interface IPoint {
    x: number
    y: number
}

export class Point implements IPoint {
    readonly x: number
    readonly y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}

export class Points {
    readonly points: IPoint[]
    constructor(points: IPoint[]) {
        this.points = points
    }

    sum = (): IPoint => {
        const sum = this.points.reduce(
            (accumulator, currentValue) => ({
                x: accumulator.x + currentValue.x,
                y: accumulator.y + currentValue.y,
            }),
            { x: 0, y: 0 }
        )
        return sum
    }
}
