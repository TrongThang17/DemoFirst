import I18n from 'i18n-js';
import en from './en.json';
import vi from './vi.json';

I18n.fallbacks = true;
I18n.translations = {
 en,
 vi
};

 
export default I18n;