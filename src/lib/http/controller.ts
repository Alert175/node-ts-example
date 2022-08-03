import * as path from "fs"

export class Controller {
	private appPath: string

	constructor(applicationPathPreifix?: string) {
		this.appPath = applicationPathPreifix || "";
		console.log(__dirname)
	}

	
}