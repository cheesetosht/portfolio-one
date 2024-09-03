import { Engine, Render, type IRendererOptions } from "matter-js"

const renderMatter = (
    elementSelector: string,
    canvasSelector: string,
    options?: IRendererOptions &
        Partial<{ restitution: number, gravityX: number, gravityY: number }> = {
            restitution: 0.6,
            gravityY: 0.3
        }) => {
    const element = document.querySelector(elementSelector)
    const canvas = document.querySelector(canvasSelector)
    const width = element?.getBoundingClientRect().width
    const height = element?.getBoundingClientRect().height

    const engine = Engine.create()
    const world = engine.world

    const render = Render.create({
        element,
        canvas,
        engine,
        options: {
            width,
            height,
            wireframes: false,
            background: 'transparent'
        }
    })

}
