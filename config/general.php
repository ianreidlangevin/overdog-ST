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
          '@rootUrl' => getenv('SITE_URL'),
          // S3 and Imgix - used in head to preconnect - without subfolder
          '@imagesUrl' => getenv('S3_IMAGES_URL'),
          '@docsUrl' => getenv('S3_DOCS_URL'),
        ],

    ],

    // Dev environment settings
    'dev' => [
        // Dev Mode (see https://craftcms.com/guides/what-dev-mode-does)
        'devMode' => true,
        // comment out or set to true if you want to test local caching
        'enableTemplateCaching' => false,
        // add MAMP support for sql dump
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
