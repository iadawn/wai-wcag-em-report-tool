'use strict';

try {
  angular.module('wcagReporter');
} catch (e) {
  angular.module('wcagReporter', ['pascalprecht.translate']);
}

angular.module('wcagReporter').config(function ($translateProvider) {
  $translateProvider.translations('en', {
    'NAV_START': 'Start Evaluating',
    'NAV_LINKS': 'Important links',
    'NAV_IMPORT': 'Import',
    'NAV_EXPORT': 'Export',
    'NAV_HELP': 'Help',
    'LABEL_RELIEDUP_TECH': 'Relied upon technologies',
    'LABEL_COMMON_PAGES': 'Common web pages',
    'LABEL_ESSENT_FUNC': 'Essential functionality of the website',
    'LABEL_VARIETY_PAGE_TYPES': 'Variety of page types',
    'LABEL_OTHER_PAGES': 'Other relevant pages',
    'LABEL_COMMISSIONER': 'Commissioner of this evaluation',
    'LABEL_SITE_SCOPE': 'Website scope',
    'LABEL_CONFORMANCE_TGT': 'Conformance Target',
    'LABEL_SITE_NAME': 'Website name',
    'WCAG_A': 'WCAG 2.0 level A',
    'WCAG_AA': 'WCAG 2.0 level AA',
    'WCAG_AAA': 'WCAG 2.0 level AAA',
    'PREV_STEP': 'Previous step',
    'NEXT_STEP': 'Next step'
  });
  $translateProvider.preferredLanguage('en');
});
