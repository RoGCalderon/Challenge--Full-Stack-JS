/* 2. Escribe una aplicación que solicite al usuario que ingrese una contraseña cualquiera.
Después se le pedirá que ingrese nuevamente la contraseña, con 3 intentos. Cuando
acierte ya no pedirá más la contraseña y mostrará un mensaje diciendo “Felicitaciones,
recordás tu contraseña”. Si falla luego de 3 intentos se mostrará el mensaje “Tenes que
ejercitar la memoria”. Los mensajes quedarán en pantalla a la espera que el usuario
presione una tecla, luego de esto se cerrará el programa. */ 

let newPassword = prompt ('Ingrese su nueva contraseña');

let intentosMax = 3;
do{
    let password = prompt('Ingrese su contraseña nuevamente');
    if( password === newPassword){
        alert('Felicitaciones,recordás tu contraseña');
        break;
    }else{
        alert('Tenes que ejercitar la memoria');
    }
} while(intentos<=intentosMax);

