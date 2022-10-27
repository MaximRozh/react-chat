import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:4000";

class SocketService {
  private socket: any = io(SOCKET_URL);

  on(call: string, callback: (val: any) => void) {
    this.socket.on(call, callback);
  }
  emit(call: string, ...rest: any) {
    this.socket.emit(call, ...rest);
  }
}

const socketService = new SocketService();

export default socketService;
