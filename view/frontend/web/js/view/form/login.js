/**
 * @copyright Copyright © 2021 Avarda. All rights reserved.
 * @package   Avarda_Checkout3
 */
define([
    'ko',
    'Magento_Checkout/js/view/authentication'
], function (ko, defaultAuthentication) {
    'use strict';

    let mixin = {
        defaults: {
            template: 'Avarda_Checkout3/form/login',
        }
    };

    return defaultAuthentication.extend(mixin);
});
