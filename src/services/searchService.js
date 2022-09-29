import * as httpRequest from '~/utils/httpRequest'

export const search = async (q, type = "less", page = null) => {
    try {
        const response = await httpRequest.get('users/search', {
            params: {
                q,
                type,
                page
            }
        })

        return response.data
    } catch (error) {
        console.log(error)
    }
}
