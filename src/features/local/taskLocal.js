


export const setToLocal = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export const getFromLocal = () => {
    const tasks = localStorage.getItem('tasks');
    return tasks === null ? [] : JSON.parse(tasks)
}