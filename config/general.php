<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

return [
    // Global settings
    '*' => [
        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 1,

        // Whether generated URLs should omit "index.php"
        'omitScriptNameInUrls' => true,

        // Control Panel trigger word
        'cpTrigger' => 'admin',

        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => getenv('SECURITY_KEY'),

        // 3e joueur - use only ascii caracter in auto generated slugs and filename
        'limitAutoSlugsToAscii' => true,
        'convertFilenamesToAscii' => true,

        // 3e joueur - Aliases
        'aliases' => [
        '@webroot' => dirname(__DIR__) . '/web',
        '@rootUrl' => getenv('SITE_URL'),
        '@svgPath' => getenv('SITE_URL') . '/img/svg-sprite.svg',
        '@assetsUrl' => getenv('SITE_URL') . '/assets',
        '@assetsPath' => dirname(__DIR__) . '/web/assets',
        ],

        // 3e joueur - Set the site url per language let admin panel empty
        'siteUrl' => [
          'siteFrench' => getenv('SITE_URL') ?: '@web',
          'siteEnglish' => getenv('SITE_URL') . '/en',
        ],

    ],

    // Dev environment settings
    'dev' => [
        // Dev Mode (see https://craftcms.com/guides/what-dev-mode-does)
        'devMode' => true,
        // comment out or set to true if you want to test local caching
        'enableTemplateCaching' => false,
        // add mamp support for sql dump
        'backupCommand' => getenv('BACKUP_COMMAND'),
        'restoreCommand' => getenv('RESTORE_COMMAND'),
    ],

    // Staging environment settings
    'staging' => [
        // Important - False to prevent administrative changes from being made on staging
        'allowAdminChanges' => false,
    ],

    // Production environment settings
    'production' => [
        // Important - False to prevent administrative changes from being made on production
        'allowAdminChanges' => false,
    ],
];
