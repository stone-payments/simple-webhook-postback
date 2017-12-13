# Simple WebHook Postback

Projeto simples para testar respostas de webhook da sua aplicação.


Armazena dados simples como "quantia de requisições" e "tempo total de requisições" afim de fornecer dados para comparação testes em uma aplicação que utilize postback.

---

### Features
- **api pequena :** com apenas 4 métodos, não tem muita coisa para aprender
- **fácil implementação :** poucas dependências de pacote

### Implementando
- Tendo [Node.Js](https://nodejs.org/en/) e [Npm](https://www.npmjs.com/) devidamente instalados na máquina, você deve:
    - Baixar o repositório
    - Navegar dentro do projeto ou terminal até onde está o arquivo package.json
    - Executar o comando ```npm install``` que realizará o download de todas as dependências necessárias
    - Então apenas execute ```npm start``` para que a aplicação suba em localhost

### Endpoints
- **HealthCheck**
    - Pode ser usado para checar se a aplicação está respondendo corretamente
    `(/status/)`

- **Validar resposta de webhook**
    - Receber e validar respostas de possíveis ambientes
    `(/dev/ e /stg/)`
    
- **Calcular tempo de várias respostas** `(Teste de volumetria / carga)`
    - Receber requisições e gravar 'timestamp'
     `(/sdx/)`
    - Calcular tempo total to teste
    `(/timelapse/)`
    - Limpar contadores internos
     `(/clear/)`

---

## Licença

Projeto mantendo padrão da licença MIT.


