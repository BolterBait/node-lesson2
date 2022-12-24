const { addTodo } = require("./db/db");

async function invokeAction({ action, title }) {
    switch (action) {
        case 'add':
            console.log('invoke add');
            await addTodo(title)
            break;
        case 'remove':
            console.log('invoke remove');
            break; case 'list':
            console.log('invoke list');
            break;
        default:
            break;
    }
}
invokeAction({ action: "add", title: "some todo" + new Date() });