import myFunction from "./module.js";

async function run() {
    try {
        const result = await myFunction(Number);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
}

run();