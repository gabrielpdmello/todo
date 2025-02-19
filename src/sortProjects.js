import { projectArray } from "./projectArray"

// sorts the projects based on its title value; case-insensitive.
const sortProjects = function() {
    projectArray.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        }
        return 0
    })
}

export {sortProjects}