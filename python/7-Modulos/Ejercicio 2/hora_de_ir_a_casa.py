import time as t

def horaDeIrACasa():

    HORA_FINAL = 19

    hora_sistema = f'{t.localtime().tm_hour}'
    fecha_sistema = f'{t.localtime().tm_mday}/{t.localtime().tm_mon}/{t.localtime().tm_year}'

    if int(hora_sistema) >= HORA_FINAL:
        print(f'La fecha de hoy es: {fecha_sistema}')
        print("Es hora de ir a casa")
    else:
        hora_restante = HORA_FINAL - int(hora_sistema)
        print(f'La fecha de hoy es: {fecha_sistema}')
        print(f'Tiempo que queda de trabajo: {hora_restante} horas')


horaDeIrACasa()