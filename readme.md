## API NodeJS com Typescript e TypeORM
> Tutorial de desenvolvimento de uma API Rest baseado no treinamento do canal do [Guido Cerqueira](https://youtu.be/j8cm2C5-xn8) no YouTube

### Tecnologia embarcada
* Node v18.15.0
* Typescript
* Nodemon
* Express
* TypeORM
* Postgres
* Docker

### Criando o banco de dados

> Rode `docker-compose up` para criar o container do banco de dados configurado no `docker-compose.yml`

### Assuntos abordados
* Criação de ambiente Node com Express em ambiente de terminal
* Banco de dados relacional TypeORM e Postgres em ambiente Dockerizado

### Endpoints
> GET `/rooms` - listagem de Aulas
```
[
	{
		"id": 1,
		"name": "As 4 operações",
		"description": "Aula sobre as quatro operações aritméticas",
		"subjects": [
			{
				"id": 2,
				"name": "Matemática"
			}
		],
		"videos": [
			{
				"id": 4,
				"title": "Subtração",
				"url": "https://www.goodle.com"
			},
			{
				"id": 3,
				"title": "Adição",
				"url": "https://www.goodle.com"
			},
			{
				"id": 2,
				"title": "Multiplicação",
				"url": "https://www.goodle.com"
			},
			{
				"id": 1,
				"title": "Divisão",
				"url": "https://www.goodle.com"
			}
		]
	},
	{
		"id": 2,
		"name": "Estatística",
		"description": "Aula sobre estatísticas",
		"subjects": [
			{
				"id": 2,
				"name": "Matemática"
			}
		],
		"videos": [
			{
				"id": 5,
				"title": "Probabilidade",
				"url": "https://www.goodle.com"
			}
		]
	}
]
```
>POST `/subject` - Criar disciplina
```
{
	"name": "Matemática"
}
```
>POST `/room` - Criar aula
```
{
	"name": "Estatística",
	"description": "Aula sobre estatísticas"
}
```
>POST `/room/:idRoom/create` - Criar vídeo da aula
```
{
	"title": "Probabilidade",
	"url": "https://www.goodle.com"
}
```
>POST `/room/:idRoom/subject` - Relacionar a aula com disciplina
```
{
	"subject_id": 2
}
```