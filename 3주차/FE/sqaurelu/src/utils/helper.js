export const concatDate = (selectedDate) => {
    const year = selectedDate.getFullYear();
    
    let month = selectedDate.getMonth() + 1;
    if (String(month).length === 1) month = '0' + String(month);

    let date = selectedDate.getDate();
    if (String(date).length === 1) date = '0' + String(date);
    return String(year) + String(month) + String(date);
}

export const cutDate = (selectedDate) => {
    console.log(selectedDate);
    
    const year = Number(selectedDate.slice(0, 4));
    const month = Number(selectedDate.slice(4, 6));
    const date = Number(selectedDate.slice(6, 8));

    return [year, month, date];
}