import xss from 'xss';

export const replaceNewlinesWithBreakTags = (text: string) => xss(text).split('\\n').join('<br>');
