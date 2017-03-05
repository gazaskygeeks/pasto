'use strict';

/**
 * Small template engine
 * @param  {String} tpl  template e.g. "<h1>{{name}}</name>"
 * @param  {Object} data data to be injected e.g. {name:'Foo'}
 * @return {String}      new substituted template e.g. "<h1>Foo</h1>"
 * Example:
 * template('<h1>{{data}}</h1>',{data:'Hello'}); // '<h1>Hello</h1>'
 */
module.exports = (tpl, data) => {
  Object.keys(data).forEach(key => {
    tpl = tpl.replace(
      new RegExp('\\{\\{\\s*' + key + '\\s*\\}\\}', 'g'),
      data[key]
    );
  });
  return tpl;
};
