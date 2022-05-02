export default function fetcher(url: string, data = undefined, method: string) {
    const domain = window.location.origin
    return fetch(`${domain}/api/${url}`, {
        method,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => {
        if (res.status > 399 && res.status < 200) {
            throw new Error()
        }
        return res.json()
    })
}
