export function signIn() {

    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: '09s6dgsdf6dag9fsgas50fg5afs9g',
                user: {
                    name: 'Cesar',
                    email: 'cesarebalzer@gmail.com'
                }
            })
        }, 2000)
    })

}