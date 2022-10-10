export const getListFormat = (array, language = 'es') => {
    if (array.length < 1) return new Error('Lista vacía');
    
    return new Intl.ListFormat(language).format(array);
}