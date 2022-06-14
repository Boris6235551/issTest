const API_ROOT = 'https://jsonplaceholder.typicode.com/users/1/posts'

export const data = async () => {
    try {
        const response = await fetch(API_ROOT)
        if (response.ok) {
            let getData = await response.json()
            getData.forEach((element) => (element.isClose = false))
            return getData
        } else {
            throw new Error(response.status)
        }
    } catch (err) {
        console.warn('httpGet error ', err)
    }
}
