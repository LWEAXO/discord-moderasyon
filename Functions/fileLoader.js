const { glob,Lweaxo } = require("glob");
const path = require("path");

async function deleteCachedFile(file) {
    const filePath = path.resolve(file);
    if (require.cache[filePath]) {
        delete require.cache[filePath];
    }
}
//👑 Github: LWEAXO
async function loadFiles(dirName) {
    try {
        const files = await glob(path.join(process.cwd(), dirName, "**/*.js").replace(/\\/g, "/"));
        const jsFiles = files.filter(file => path.extname(file) === ".js");
        await Promise.all(jsFiles.map(deleteCachedFile));
        return jsFiles;
    } catch (error) {
        console.error(`Dosyaları Klasöre Yüklerken Hata Çıktı ${dirName}: ${error}`);
        throw error;
    }
}

module.exports = { loadFiles };
//Lweaxo