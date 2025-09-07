import fs from 'fs';
import os from 'os';
import path from 'path';


// fs.readFile('./sample.txt', 'utf-8', (err, data) => {
//   console.log(err);
//   console.log(data);
// });

// fs.writeFile('./sample.txt', 'hello jee', 'utf-8', (err) => {
//   console.log(err);
// });



// 1. Create a file named `hello.txt` and write the text: `"Hello, Node.js File System!"`

// fs.writeFile('example.txt', 'Hello, Node.js File System!', (err) => {
//   if (err) { console.log(err); }
//   console.log('File created')
// });



// 2. Read and display the contents of `hello.txt` in the console.
// fs.readFile('./hello.txt', 'utf-8', (err, data) => {
//   if (err) { console.log(err); }
//   console.log(data);
// });


// 3. Append the text: `"Appended text goes here."` to the end of `hello.txt`.
// fs.appendFile('./hello.txt', 'Appended text goes here.', 'utf-8', (err) => {
//   if (err) { console.log(err); }
//   console.log('Append successfully')
// })


// 4. Rename `hello.txt` to `greeting.txt`.

// fs.rename('hello.txt', 'greeting.txt', (err) => {
//   if (err) { console.log(err); }
//   console.log('successful')
// });

// 5. Delete the `greeting.txt` file.
// fs.unlink('./greeting.txt', (err) => {
//   if (err) { console.log(err); }
//   console.log('successful')
// });

// 6.Create a new folder named `data`.

// fs.mkdir('data', (err) => {
//   if (err) { console.log(err); }
//   console.log('successful')
// })


// 9.List all files inside the `data` folder.

// fs.readdir('./data', (err, data) => {
//   if (err) { console.log(err); }
//   console.log(data)
// })


