import {StringWrapper, RegExpWrapper, isPresent} from 'angular2/src/facade/lang';

var DASH_CASE_REGEXP = RegExpWrapper.create('-([a-z])');
var CAMEL_CASE_REGEXP = RegExpWrapper.create('([A-Z])');
// TODO(tbosch): Cannot make this const/final right now because of the transpiler...
var INTERPOLATION_REGEXP = RegExpWrapper.create('\\{\\{(.*?)\\}\\}');

export function dashCaseToCamelCase(input:string) {
  return StringWrapper.replaceAllMapped(input, DASH_CASE_REGEXP, (m) => {
    return m[1].toUpperCase();
  });
}

export function camelCaseToDashCase(input:string) {
  return StringWrapper.replaceAllMapped(input, CAMEL_CASE_REGEXP, (m) => {
    return '-' + m[1].toLowerCase();
  });
}

export function isInterpolation(input) {
  return isPresent(RegExpWrapper.firstMatch(INTERPOLATION_REGEXP, input));
}