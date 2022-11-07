import tkinter
from tkinter import ttk 

window = tkinter.Tk()

window.columnconfigure(0, weight=1)
window.columnconfigure(1, weight=3)

label1 = tkinter.Label(window, text='Lista Paises')
label1.grid(column=0, row=0, sticky=tkinter.W)

listaPaises = ['Colombia', 'España', 'Estados Unidos', 'Suiza']
lista_items = tkinter.StringVar(value=listaPaises)
listbox = tkinter.Listbox(window, height=20, listvariable=lista_items)
listbox.grid(column=0, row=1, sticky=tkinter.W)


window.mainloop()

