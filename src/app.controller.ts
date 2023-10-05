import { Controller, Get, Render } from '@nestjs/common';
import { TodoService } from './todo/todo.service';

@Controller()
export class AppController {
  constructor(private todoService: TodoService) {}

  @Get()
  @Render('index')
  root() {
    return { todos: this.todoService.findAll() };
  }
}
