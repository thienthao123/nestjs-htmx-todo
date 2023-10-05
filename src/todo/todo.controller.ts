import {
  Controller,
  Get,
  Post,
  Render,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { IToDo, TodoService } from './todo.service';
import { randomInt } from 'crypto';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  @Render('swap/todo/list')
  async findAll() {
    return { todos: this.todoService.findAll(), layout: false };
  }

  @Post()
  @Render('index')
  async create(@Body('title') title: string) {
    const todo = { title, id: randomInt(9999) } as IToDo;
    this.todoService.create(todo);
    return { todos: this.todoService.findAll(), layout: false };
  }

  @Post('/:id')
  @Render('partials/todo')
  async update(@Param('id') id: number, @Body('done') done: number) {
    const is_done = done == 1;
    console.log('is_done', is_done);
    console.log(done);
    const todo = this.todoService.update(id, is_done);
    return { todo, layout: false };
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    this.todoService.delete(id);
    return '';
  }
}
