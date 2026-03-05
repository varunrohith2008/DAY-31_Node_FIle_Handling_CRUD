const fs = require('fs/promises');
const path = require('path');

async function main() {
    // Define the output directory and file path
    const outputDir = path.join(__dirname, 'output');
    const fileName = path.join(outputDir, 'test_file.txt');

    console.log("==========================================");
    console.log("   Node.js File and Path Operations");
    console.log("==========================================\n");

    // 0. Setup: Ensure the output directory exists
    try {
        await fs.mkdir(outputDir, { recursive: true });
        console.log(`[SETUP] Output directory ready at: \n-> "${outputDir}"\n`);
    } catch (err) {
        console.error("Error creating output directory:", err);
        return;
    }

    // 1. Create / Write to file
    try {
        await fs.writeFile(fileName, "Hello, this is the initial content.\n");
        console.log(`[CREATE] Success! Created file: \n-> "${fileName}"`);
    } catch (err) {
        console.error("Error creating file:", err);
    }

    // Read file to verify
    try {
        const content = await fs.readFile(fileName, 'utf8');
        console.log(`\n[READ] File content before update:\n"${content.trim()}"`);
    } catch (err) {
        console.error("Error reading file:", err);
    }

    // 2. Update file (appending new text)
    try {
        await fs.appendFile(fileName, "This is the updated content added to the file.\n");
        console.log(`\n[UPDATE] Success! Appended new content to the file.`);

        const updatedContent = await fs.readFile(fileName, 'utf8');
        console.log(`\n[READ] File content after update:\n"${updatedContent.trim()}"`);
    } catch (err) {
        console.error("Error updating file:", err);
    }

    // 3. Check the path and get absolute path
    const absolutePath = path.resolve(fileName);
    console.log(`\n[PATH] Absolute Path of the updated file:`);
    console.log(`-> ${absolutePath}`);

    // 4. Get file extension
    const ext = path.extname(fileName);
    console.log(`\n[EXTENSION] The file extension is:`);
    console.log(`-> "${ext}"`);

    // 5. Delete file
    console.log("\n==========================================");
    console.log("NOTE: File deletion is currently disabled.");
    console.log(`Check the 'output' folder to see your file!`);
    console.log("==========================================");

    /*
    // Uncomment this block to delete the file and the folder
    try {
        await fs.unlink(fileName);
        console.log(`\n[DELETE] Success! File deleted.`);
        await fs.rmdir(outputDir);
        console.log(`[DELETE] Success! Output folder deleted.`);
    } catch (err) {
        console.error("Error deleting file/folder:", err);
    }
    */
}

main();
