/** @odoo-module **/

import { Component, onMounted, useRef, useState } from "@odoo/owl";

export class Todo extends Component {
    static template = "owl_playground.Todo";

    static props = {
        id: {type: Number},
        description: {type: String},
        done: {type: Boolean},
        removeTodo: {type: Function},
        toggleState: {type: Function},
    };

    onClickDone(ev) {
        this.props.toggleState(this.props.id, this.props.done);
    }

    onClickRemove(ev) {
        this.props.removeTodo(this.props.id);
    }
}

export class TodoList extends Component {
    static template = "owl_playground.TodoList";

    static components = { Todo };

    static props = {
        surname: {type: String},
    };

    setup() {
        this.todoItems = useState([
            { id: 3, description: "buy milk", done: false },
            { id: 4, description: "buy eggs", done: true },
            { id: 5, description: "buy avocado", done: true },
        ]);
        this.currentId = 6;
        const inputRef = useRef("inputAddTodo");

        onMounted(() => {
            inputRef.el.focus();
        });
    }

    addTodo(ev) {
        if (ev.keyCode === 13 && ev.target.value !== "") {
            this.todoItems.push({
                id: this.currentId++,
                description: ev.target.value,
                done: false,
            });
            ev.target.value = "";
        }
    }

    removeTodo(todoId) {
        if (todoId === undefined) {
            return;
        }
        const todoIndex = this.todoItems.findIndex((todo) => todo.id === todoId);
        if (todoIndex >= 0) {
            this.todoItems.splice(todoIndex, 1);
        }
    }

    toggleTodoState(doneId, previousDone) {
        if (doneId === undefined) {
            return;
        }
        const todo = this.todoItems.find(
            (todoItem) => todoItem.id === doneId
        );
        if (todo) {
            todo.done = !previousDone;
        }
    }
}
