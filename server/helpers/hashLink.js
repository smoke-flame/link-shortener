import Hashids from 'hashids'

const hashids = new Hashids();

export const encode = (str) => {
    const count = str.split('').reduce((value, current) => value + current.charCodeAt(0), 0)
    return `lk/${hashids.encode(count)}`
}
