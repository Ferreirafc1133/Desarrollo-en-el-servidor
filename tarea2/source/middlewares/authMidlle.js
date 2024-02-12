const ResponseStatus = require("./../utils/response-status");

const authUser ={
    id: 1,
    role: 'admin',
    name: 'ferreira'
}

const authMid = (req, res, next) => {
    const { token } = req.query;
    if (token && token === '12345'){
        req.user = {...authUser}
        console.log("Se metio");
        next();
    }
    else{
        res.sendStatus(ResponseStatus.UNAUTHENTICATED)
        console.log("no se auntentico");
    }
    
    
}

const authRolMid = (requiredRole) => {
    return (req, res, next) => {
      const { role } = authUser; 
      if (role && role === requiredRole) {
        console.log("El rol es correcto:", role);
        next();
      } else {
        res.sendStatus(ResponseStatus.NOT_FOUND);
        console.log("Rol incorrecto:", role);
      }
    };
};

module.exports = {
    authMid,
    authRolMid
};