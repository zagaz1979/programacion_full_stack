import sqlite3
import getpass

def main():
    crear_usuario(4, 'pepe', 'superclave')

def main2():
    username = input('Nombre de usuario: ')
    password = getpass.getpass('Contraseña: ')

    if verifica_credenciales(username, password):
        print('Login correcto')
    else:
        print('Login incorrecto')

def verifica_credenciales(username, password):

    conn = sqlite3.connect('11-base_de_datos/miaplicacion.db')
    cursor = conn.cursor()

    query = f'select id from users where username = "{username}" and password = "{password}" '
    print('Query a ejecutar: ', query)
    rows = cursor.execute(query)
    data = rows.fetchone()
    #print('data es ', type(data))
    print(data)

    cursor.close()
    conn.close()

    if data == None:
        return False
    
    return True




def crear_usuario(identificador, usuario, clave):
    conn = sqlite3.connect('11-base_de_datos/miaplicacion.db')
    cursor = conn.cursor()

    query = 'insert into users(id, username, password) values(?, ?, ?)'
    rows = cursor.execute(query, (identificador, usuario, clave))
    print(type(rows))
    conn.commit()

    cursor.close()
    conn.close()


if __name__ == '__main__':
    main()
