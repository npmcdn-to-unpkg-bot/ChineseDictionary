/**
 * ANGULAR 2 LOCALIZATION
 * An Angular 2 library to translate messages, dates and numbers.
 * Written by Roberto Simonetti.
 * MIT license.
 * https://github.com/robisim74/angular2localization
 */
/**
 * IntlSupport class.
 * Provides the methods to check if Intl is supported.
 *
 * @author Roberto Simonetti
 */
export declare class IntlSupport {
    constructor();
    /**
     * Support for dates.
     *
     * @param defaultLocale The default locale
     * @return True if the browser supports locales for dates, otherwise false.
     */
    static DateTimeFormat(defaultLocale: string): boolean;
    /**
     * Support for numbers.
     *
     * @param defaultLocale The default locale
     * @return True if the browser supports locales for numbers, otherwise false.
     */
    static NumberFormat(defaultLocale: string): boolean;
    /**
     * Support for Collator.
     *
     * @param lang The current language code
     * @return True if the browser supports Collator, otherwise false.
     */
    static Collator(lang: string): boolean;
}
