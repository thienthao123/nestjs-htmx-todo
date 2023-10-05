import { Injectable } from '@nestjs/common';

export interface IToDo {
  id: number;
  title: string;
  done: boolean;
}

@Injectable()
export class TodoService {
  private todos: IToDo[] = [
    {
      id: 1,
      title: 'Todo 1',
      done: false,
    },
    {
      id: 2,
      title: 'Todo 2',
      done: false,
    },
  ];
  findAll(): IToDo[] {
    return this.todos;
  }

  create(todo: IToDo): IToDo {
    todo.done = false;
    this.todos.push(todo);
    return todo;
  }

  update(id: number, done: boolean): IToDo {
    const index = this.todos.findIndex((t) => t.id == id);
    const todo = this.todos[index];
    todo.done = done;
    this.todos[index] = todo;
    return todo;
  }

  delete(id: number): IToDo {
    const index = this.todos.findIndex((t) => t.id == id);
    const todo = this.todos[index];
    this.todos.splice(index, 1);
    return todo;
  }
}
