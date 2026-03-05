# File Operations Guide & Folder Structure

This project demonstrates core Node.js file system (`fs/promises`) and path (`path`) modules. 

## Folder Structure

When you run the script, it automatically creates an isolated `output` folder to keep your workspace clean. The generated structure looks like this:

```text
DAY - 31/
│
├── fileOperations.js  # The main Node.js script
├── README.md          # This guide
│
└── output/            # Generated automatically by the script
    └── test_file.txt  # The file created, read, and updated by the script
```

## How to Run

To execute the file operations script, open your terminal in the `DAY - 31` directory and run:

```bash
node fileOperations.js
```

## What the Script Does

1. **Setup**: Creates an `output` directory if it doesn't already exist using `fs.mkdir()`.
2. **Create**: Creates a new file called `test_file.txt` inside the `output` folder and writes initial text using `fs.writeFile()`.
3. **Read**: Reads the newly created file using `fs.readFile()` and logs the content.
4. **Update**: Appends new text to the end of the file using `fs.appendFile()`, then reads it again to verify.
5. **Path**: Uses `path.resolve()` to print the exact, absolute path of the file on your computer.
6. **Extension**: Uses `path.extname()` to extract the `.txt` extension from the filename.
7. **Delete (Optional)**: At the end of the script, there is commented-out code using `fs.unlink()` and `fs.rmdir()`. You can uncomment it to see how files and folders are deleted.
