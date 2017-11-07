# NodeJsRedis

Projeto simples para testar respostas de webhook da sua aplicação.

### Features 
- Validar resposta de webhook
    - Receber e validar respostas de possíveis ambientes
    `(/dev/ e /stg/)`
    
- Calcular tempo de várias respostas `(Teste de volumetria / carga)`
    - Receber requisições e gravar 'timestamp'
     `(/sdx/)`
    - Calcular tempo total to teste
    `(/timelapse/)`
    - Limpar contadores internos
     `(/clear/)`
    
### HealthCheck
Com o projeto local, o endpoint "/status" pode ser usado para checar se a aplicação está respondendo corretamente


