import { Tarefa } from '../entities/tarefa.entity';
import { TarefaService } from '../service/tarefa.service';
import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Body, Put, Delete} from "@nestjs/common";
import { NOMEM } from 'dns';

@Controller('/tarefa')
export class TarefaController{
    constructor(private readonly service: TarefaService){}


    //MAPEANDO REQUISIÇÃO HTTP
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll():  Promise<Tarefa[]>{
        return this.service.findAll()
    }

    @Get('/:id') 
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Tarefa>{
        return this.service.findById(id)
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByName(@Param('nome') nome: string): Promise<Tarefa[]>{
        return this.service.findByName(nome)
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() tarefa: Tarefa): Promise<Tarefa>{
        return this.service.create(tarefa)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() tarefa: Tarefa): Promise<Tarefa>{
        return this.service.update(tarefa)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.service.delete(id)
    }
}

