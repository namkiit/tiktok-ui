import * as httpRequest from '~/utils/httpRequest'

export const search = async (q, page = "less") => {
    try {
        const response = await httpRequest.get('users/suggested', {
            params: {
                q,
                page
            }
        })

        return response.data
    } catch (error) {
        console.log(error)
    }
}
