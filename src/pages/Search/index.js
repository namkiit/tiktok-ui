import classNames from 'classnames/bind'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import * as searchService from '~/services/searchService'
import styles from './Search.module.scss'
import { ChevronDownIcon } from '~/components/Icons'
import SearchAccounts from '~/components/SearchAccounts'

const cx = classNames.bind(styles)

function Search() {
    const [searchResults, setSearchResults] = useState([])
    const [page, setPage] = useState(1)

    const location = useLocation()

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await searchService.search(location.state, 'more')
            setSearchResults(result)
            setPage(1)
        }

        fetchAPI()
    }, [location.state])

    const handleLoadMore = async () => {
        const result = await searchService.search(location.state, 'more', page + 1)
        setSearchResults(prev => [...prev, ...result])
        setPage(page + 1)
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('tab-container')}>
                <div className={cx('tab')}>Top</div>
                <div className={cx('tab', { selected: true })}>Accounts</div>
                <div className={cx('tab')}>Videos</div>
                <div className={cx('underline')}></div>
            </div>

            <div className={cx('result')}>
                {searchResults.map((result, index) => {
                    return <SearchAccounts data={result} key={index} />
                })}
            </div>

            <div className={cx('load-more')} onClick={handleLoadMore}>
                Load more <ChevronDownIcon className={cx('icon')} width="16px" height="16px" />
            </div>
        </div>
    )
}

export default Search