/** @odoo-module **/

import { Card } from "./card/card";
import { Component, useState } from "@odoo/owl";
import { Counter } from "./counter/counter";
import { TodoList } from "./todo/todo";


export class PlaygroundMain extends Component {
    static template = "owl_playground.Main";

    static components = { Card, Counter, TodoList };
}
