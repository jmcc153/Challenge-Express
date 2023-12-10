# Challenge-Express

## Estructura

```
/
|
|- index.js
|- app.js
|- .env
|- /api
|  |- /database
|    |- mongoDB.js
|
|- |- /models
|    |- brand.model.js
|    |- products.model.js
|    |- user.model.js
|- |- /routes
|    |- brand.router.js
|    |- price.router.js
|    |- products.router.js
|    |- user.router.js
|    |- index.js
|-  |- /services
|    |- brand.service.js
|    |- price.service.js
|    |- products.service.js
|    |- user.service.js
```

## Variables de entorno

| Nombre           | TYPE  
|:--------------:|:------:|
| MONGO_USER     | String | 
| MONGO_PASSWORD | String |
| PORT           | INT    |
---
## Endpoints 

### /api/products
### /api/brands
### /api/users
### /api/price/{user_ID}/{nombre_producto}
