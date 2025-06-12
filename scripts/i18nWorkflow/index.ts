import { genDefaultLocale } from './genDefaultLocale';
import { genDiff } from './genDiff';
import { split } from './utils';

split('DIFF ANALYSIS');
await genDiff();

split('GENERATE DEFAULT LOCALE');
await genDefaultLocale();

split('GENERATE I18N FILES');
