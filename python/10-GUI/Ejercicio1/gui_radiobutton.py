import tkinter
from tkinter import ttk
import time


def iniciarVentana():

    def restart(event):
        window.destroy()
        time.sleep(1)
        iniciarVentana()

    def itemSeleccionado():
        if seleccionado.get() == '1':
            label1.configure(text="opcion seleccionada = Colombia")
        if seleccionado.get() == '2':
            label1.configure(text="opcion seleccionada = España")
        if seleccionado.get() == '3':
            label1.configure(text="opcion seleccionada = Estados Unidos")


    window = tkinter.Tk()


    seleccionado = tkinter.StringVar()
    radio1 = ttk.Radiobutton(window, width='20', text='Colombia', value='1',variable=seleccionado, command=itemSeleccionado )
    radio2 = ttk.Radiobutton(window, width='20', text='España', value='2',variable=seleccionado, command=itemSeleccionado )
    radio3 = ttk.Radiobutton(window, width='20', text='Estados Unidos', value='3',variable=seleccionado, command=itemSeleccionado )


    radio1.grid(column=0, row=0, padx=5, pady=5)
    radio2.grid(column=0, row=1, padx=5, pady=5)
    radio3.grid(column=0, row=2, padx=5, pady=5)


    label1 = tkinter.Label(window, width=80, text="opcion seleccionada")
    label1.grid(column=0, row=3, padx=5, pady=5)


    buttonReiniciar = tkinter.Button(window, width=15, text='Reiniciar')
    buttonReiniciar.grid(column=0, row=4, padx=5, pady=5)
    buttonReiniciar.bind('<Button-1>', restart)


    window.mainloop()


iniciarVentana()