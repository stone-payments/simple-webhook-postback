# NodeJsRedis

Projeto simples para testar respostas de webhook da sua aplicação.

# "HealthCheck"

Com o projeto rotando local, o endpoint "/status" pode ser usado para checar se a aplicação está respondendo corretamente

# Features 
- Validar resposta de webhook
    - Receber e validar respostas de possíveis ambientes (/dev/ e /stg/)
- Calcular tempo de várias respostas (Teste de volumetria / carga)
    - Receber requisições e gravar 'timestamp' (/sdx/)
    - Calcular tempo total to teste (/timelapse/)
    - Limpar contadores internos (/clear/)
    



