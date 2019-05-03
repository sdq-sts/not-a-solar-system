## NOT A SOLAR SYSTEM

[![Netlify Status](https://api.netlify.com/api/v1/badges/d56ca19b-f103-4c72-936d-cdad531b8c4d/deploy-status)](https://app.netlify.com/sites/not-a-solar-system/deploys)

SPA desenvolvido para o app [**NOT A SOLAR SYSTEM**](https://not-a-solar-system.netlify.com/).

O código do backend pode ser econtrado [aqui](https://github.com/sdq-sts/not-a-solar-system-back).

Caso não queira criar uma conta e inserir seus dados, pode usar o seguinte:

```
Email: gary.oldman@mail.com
Senha: oldman14000
```

A aplicação suporta um tema claro e um escuro, que podem ser ativados através do botão switch no menu de logout.

Tema claro:

![Not a solar system - Light theme](https://i.imgur.com/OwWaPvJ.png)

Tema escuro:

![Not a solar system - Dark theme](https://i.imgur.com/JtIN94n.png)

### BIBLIOTECAS

Foi usado no projeto:

  - [Vue](https://vuejs.org/)
  - [Vuex](https://github.com/vuejs/vuex)
  - [Vuetify](https://vuetifyjs.com/en/)
  - [Vue Apexcharts](https://github.com/apexcharts/vue-apexcharts)
  - [Axios](https://github.com/axios/axios)


### COMO USAR

Para rodar o projeto localmente é necessário iniciar a [api](https://github.com/sdq-sts/not-a-solar-system-back)
e depois executar os comandos no terminal:

```bash
$ git clone git@github.com:sdq-sts/not-a-solar-system-front.git && cd not-a-solar-system-front/
$ npm install && npm run serve
```

A aplicação vai rodar na porta `8080`


### LINTER

O projeto usa `eslint` com a configuração `standard`.

Para rodar o linter é preciso executar o comando

```bash
$ npm run lint
```
