<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\helpers\App;

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
        'securityKey' => App::env('SECURITY_KEY'),

        // Overdog opinionated - set default same site cookie value
        'sameSiteCookieValue' => 'Lax',

        // Overdog opinionated - db backup on update - set to false to avoid backing up large db on git deploy
        // Do the backup with your db provider before deploying a Craft update.
        'backupOnUpdate' => false,

        // Overdog opinionated - limit revision to avoid adding lot to db
        'maxRevisions' => 6,

        // Overdog opinionated - important for assets cache replacement
        'revAssetUrls' => true,

        // Overdog opinionated - use only ascii caracter in auto generated slugs and filename
        'limitAutoSlugsToAscii' => true,
        'convertFilenamesToAscii' => true,

        // Overdog opinionated - search option to enable fuzzy search from both directions GLOBALLY FOR ALL FORMS
        'defaultSearchTermOptions' => [
          'subLeft' => true,
        ],

        // Overdog opinionated - remove the X-Powered-By Craft header should be sent, helping to identify that the site is running on Craft
        'sendPoweredByHeader' => false,

        // Overdog opinionated - Aliases
        'aliases' => [
          '@webroot' => dirname(__DIR__) . '/web',
          '@rootUrl' => App::env('SITE_URL'),
          /**
           *  AWS Cloudfront URLs
           *  Used in layout.twig with the preconnect attribute 
           *  Remove or edit if you use a different setup
           */
          '@imagesUrl' => App::env('S3_IMAGES_URL') ?: '',
          '@docsUrl' => App::env('S3_DOCS_URL') ?: '',
        ],

    ],

    // Dev environment settings
    'dev' => [
        // Dev Mode (see https://craftcms.com/guides/what-dev-mode-does)
        'devMode' => true,
        // Comment out or set to true if you want to test local caching
        'enableTemplateCaching' => false,
        // Overdog opinionated - Add MAMP support for sql dump
        'backupCommand' => App::env('BACKUP_COMMAND'),
        'restoreCommand' => App::env('RESTORE_COMMAND'),
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
