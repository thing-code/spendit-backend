import Elysia from "elysia";

export const transactionModule = new Elysia({ prefix: '/transactions' })
    .get('/', () => {
        return {
            message: 'Getting All Transactions'
        }
    })
    .post('/', () => {
        return {
            message: 'Add New Transactions'
        }
    })
    .get('/:id', ({ params: { id } }) => {
        return {
            message: `Getting Transaction Detail ${id}`
        }
    })
    .patch('/:id', ({ params: { id } }) => {
        return {
            message: `Updating Transaction ${id}`
        }
    })
    .delete('/:id', ({ params: { id } }) => {
        return {
            message: `Deleting Transaction ${id}`
        }
    })