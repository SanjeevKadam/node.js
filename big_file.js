const fs = require('fs');

const readStream = fs.createReadStream('largefile.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
    console.log(`Received chunk of size: ${chunk.length}`);
    // Process the chunk here
});

readStream.on('end', () => {
    console.log('File reading completed');
});

readStream.on('error', (err) => {
    console.error('Error reading file:', err);
});
