import 'socket.io'

declare module 'socket.io' {
    interface Socket {
        jwtToken?: string
    }
}
