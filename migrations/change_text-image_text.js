module.exports = function (block) {
    const before = block.text
    block.text = {
        type: 'doc',
        content: [{
            type: 'paragraph',
            content: [{
                text: 'hi ich bin ein neuer text',
                type: 'text'
            }]
        }]
    }
}
