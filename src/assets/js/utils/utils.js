export const toHtml = string => {
    const template = document.createElement('template');
    template.innerHTML = string;
    return template.content;
};

const URL_PARAM_REGEXP = /:\w+/g;
const isUrlParam = path => URL_PARAM_REGEXP.test(path);
const urlToRegExp = url => RegExp(`^${url.replace(URL_PARAM_REGEXP, '(.*)')}$`);
export const isEqualPaths = (template, url) => urlToRegExp(template).test(url);

export const extractUrlParams = (template, url) => {
    const values = url.split('/');
    const params = {};

    if (!values) {
        return params;
    }

    return template.split('/').reduce((acc, param, index) => {
        if (!isUrlParam(param)) {
            return acc;
        }
        //We need to remove ':' from param name
        acc[param.slice(1)] = values[index];

        return acc;
    }, params);
};