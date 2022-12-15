# -*- coding: utf-8 -*-

from odoo.http import Controller, request, route

class GromaController(Controller):

    @route('/groma', type='http', auth='public')
    def groma_main(self):
        """ Main """
        return request.render("groma.main")
