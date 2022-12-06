import fs from 'fs'

export class ProductManager {
    constructor(path) {
        this.path = path

        this.#init()
    }

    #init() {
        try {
            const existFile = fs.existsSync(this.path)

            if (existFile) return;

            fs.writeFileSync(this.path, JSON.stringify([]))

        } catch (error) {
            console.log(error);
        }
    }

    async getProduct(){
        const res = await fs.promises.readFile(this.path, "utf-8")

        return JSON.parse(res)
    }
}