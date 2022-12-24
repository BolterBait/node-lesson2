const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const dbPath = path.resolve(__dirname, 'db.json');

async function readDb() {
    const dbRaw = await fs.readFile(dbPath, 'utf8');
    const db = JSON.parse(dbRaw);
    return db;
}

async function addTodo(title) {
    const id = nanoid();

    const todo = { id, title };
    const db = await readDb();
    db.push(todo);

    await fs.writeFile(dbPath, JSON.stringify db);
}

module.exports = {
    addTodo,
}