const getListFormat = (array, language = 'en') => {
    if (array.length < 1) return new Error('Lista vacía');
    return new Intl.ListFormat(language).format(array);
}

export default getListFormat;