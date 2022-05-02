export const C = {
    comment_cha_1: {
        id: 1,
        content: "ako",
        comment_con: [
            {
                id:11,
                content: "alo"
            },
            {
                id:12,
                content: "naldng"
            }
        ]
    }
}

export  const comments = [
    {

        id: 1,
        comment_parent: 'p1',
        comment_child: [
            {
                id: 11,
                content: "c1"
            },
            {
                id: 12,
                content: "c2"
            }

        ]
    },
    {

        id: 2,
        comment_parent: 'p2',
        comment_child: [
            {
                id: 21,
                content: "c1"
            },
            {
                id: 22,
                content: "c2"
            }

        ]
    }
]
