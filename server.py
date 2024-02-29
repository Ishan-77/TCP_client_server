import socket 

import threading

def  connect_a_client(conn,addr):
     print("New client has been connected")
     data = conn.recv(2048)
     print("Data recieved from client is",data)
     

HOST = "localhost"
PORT = 3000

server_socket = socket.socket(); # socket obj created

server_socket.bind((HOST,PORT)); # bind

server_socket.listen() # listen for new connection

print("Server is listening on ",HOST,PORT)

while True:
     conn,addr = server_socket.accept()

     t = threading.Thread(target=connect_a_client,args=(conn,addr)) # new thread created
     t.start() # starts running the thread
     



