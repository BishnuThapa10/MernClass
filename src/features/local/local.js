

export const setToLocal = (employees) => {
    localStorage.setItem('employees', JSON.stringify(employees));
}

export const getFromLocal = () => {
    const employees = localStorage.getItem('employees');
    return employees === null ? [] : JSON.parse(employees)
}