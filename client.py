import socket

print("New client started : Client1")

HOST = "localhost"
PORT = 3000 # port for server to connect

client_socket = socket.socket() # socket object 
client_socket.connect((HOST,PORT)) # 3 way handshake happens here

client_socket.sendall(b"Hello from client1")

