# -*- coding: utf-8 -*-
{
    'name': "Groma Base",
    'summary': "Groma Base",
    'description': """
        Groma Base
    """,

    'author': "Thibault Delavallée",
    'website': "http://www.legrog.org",

    'category': 'Stuff',
    'version': '0.1',

    'depends': ['base', 'web'],
    'application': True,
    'installable': True,

    'data': [
        'views/groma_templates_ui.xml',
    ],
    'assets': {
        'groma.assets_groma': [
            # bootstrap
            ('include', 'web._assets_helpers'),
            'web/static/src/scss/pre_variables.scss',
            'web/static/lib/bootstrap/scss/_variables.scss',
            ('include', 'web._assets_bootstrap'),

            'web/static/src/libs/fontawesome/css/font-awesome.css', # required for fa icons
            'web/static/src/legacy/js/promise_extension.js', # required by boot.js
            'web/static/src/boot.js', # odoo module system
            'web/static/src/env.js', # required for services
            'web/static/src/session.js', # expose __session_info__ containing server information
            'web/static/lib/owl/owl.js', # owl library
            'web/static/lib/owl/odoo_module.js', # to be able to import "@odoo/owl"
            'web/static/src/core/utils/functions.js',
            'web/static/src/core/browser/browser.js',
            'web/static/src/core/registry.js',
            'web/static/src/core/assets.js',
            'owl_playground/static/src/**/*',
        ],
    }
}
