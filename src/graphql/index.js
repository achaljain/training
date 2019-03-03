const itemTemplate = `{
    WORD
}`

const listWords = `
    query listWords($limit: Int $nxtToken: String) {
        listMagic1S(limit: $limit nextToken: $nxtToken) {
            items ${itemTemplate}
        }
    }
`

export default {
    listWords
}