import Polyglot from 'node-polyglot';
import langStrings from '../lang/lang';

const locale = window.navigator.userLanguage || window.navigator.language;
let polyglot = new Polyglot(locale);
if (locale in langStrings) {
    polyglot.extend(langStrings[locale]);
} else {
    polyglot.extend(langStrings['es']);
}

export default polyglot;