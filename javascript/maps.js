function getAdmins(map){
    let admins = [];
    for([key, values] of map){
        if(value==='Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();
usuarios.set('Andre', 'Admin');
usuarios.set('Augusto', 'Admin');
usuarios.set('Almeida', 'User');
usuarios.set('Machado', 'Admin');

console.log(getAdmins(usuarios))