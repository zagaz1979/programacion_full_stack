import sqlite3

def main():
    ruta = '11-base_de_datos/universidad.db'

    crear_base(ruta)
    crear_tabla(ruta)
    insertar_datos(ruta)
    busqueda_x_nombre(ruta)

def crear_base(ruta):
    conn = sqlite3.connect(ruta)     

def crear_tabla(ruta):
    conn = sqlite3.connect(ruta)
    cursor = conn.cursor()

    cursor.execute("""
        create table if not exists alumnos(
            id integer primary key,
            nombre text not null,
            apellido text not null
        )
    """)

    cursor.close()
    conn.close()

def insertar_datos(ruta):
    conn = sqlite3.connect(ruta)
    cursor = conn.cursor()
    cursor2 = conn.cursor()

    id_max = 'select max(id) from alumnos'
    rows = cursor2.execute(id_max)
    data = rows.fetchone()

    data2 = list(data)
    
    if data2[0] == None:
        id1 = 1
        id2 = 2
        id3 = 3
    else:
        id1 = data2[0] + 1
        id2 = data2[0] + 2
        id3 = data2[0] + 3


    #multiples registros con executemany
    
    records = [
        (id1, f'Maria{id1}', 'Gonzalez'),
		(id2, f'Juan{id2}', 'Martinez'),
		(id3, f'Anibal{id3}', 'Smith')
    ]

    query = 'insert into alumnos(id, nombre, apellido) values(?, ?, ?)'
    cursor.executemany(query, records)
    conn.commit()
    

    cursor2.close()
    cursor.close()
    conn.close()


def busqueda_x_nombre(ruta):

    nombre = input("Digite el Nombre del alumno: ")

    conn = sqlite3.connect(ruta)
    cursor = conn.cursor()

    query = f'select * from alumnos where nombre = "{nombre}" '
    rows = cursor.execute(query)
    data = rows.fetchone()

    cursor.close()
    conn.close()

    if data == None:
        print("No existe el alumno")
    else:
        print(data)


if __name__ == '__main__':
    main()