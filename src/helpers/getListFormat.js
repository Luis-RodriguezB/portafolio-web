const getListFormat = (array, language = 'en') => {
  if (array.length < 1) return [];
  return new Intl.ListFormat(language).format(array);
};

export default getListFormat;