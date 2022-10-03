import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import HeadlessTippy from '@tippyjs/react/headless'

import { useDebounce } from '~/hooks'
import * as searchService from '~/services/searchService'
import styles from './SearchInput.module.scss'
import Popper from '~/components/Popper'
import AccountItems from '~/components/AccountItems/'

const cx = classNames.bind(styles)

function SearchInput() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [showResults, setShowResults] = useState(false)
    const [loading, setLoading] = useState(false)

    const inputRef = useRef()

    const debouncedValue = useDebounce(searchValue, 500)

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResults([])
            return
        }

        const fetchAPI = async () => {
            setLoading(true)

            const result = await searchService.search(debouncedValue)
            setSearchResults(result)

            setLoading(false)
        }

        fetchAPI()

    }, [debouncedValue])

    const handleInputChange = (e) => {
        let value = e.target.value
        if (value.trim() === '') value = ''

        setSearchValue(value)
    }

    const handleClearSearch = () => {
        setSearchValue('')
        setSearchResults([])
        inputRef.current.focus()
    }

    const handleHideSearch = () => {
        setShowResults(false)
    }

    return (
        <HeadlessTippy
            visible={showResults && searchResults.length > 0}
            interactive
            zIndex="99"
            render={attrs => (
                <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                    <Popper>
                        <div className={cx('text-result')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} /> {searchValue}
                        </div>
                        <h4 className={cx('search-label')}>Accounts</h4>
                        {searchResults.map((result) => {
                            return <AccountItems key={result.id} data={result} onClick={handleHideSearch}></AccountItems>
                        })}
                        <Link to={`/search/user/${searchValue}`} state={searchValue} onClick={handleHideSearch}><div className={cx('view-all')}>View all results for "{searchValue}"</div></Link>
                    </Popper>
                </div>
            )}
            onClickOutside={handleHideSearch}
        >
            <div className={cx('search')}>
                <input
                    placeholder="Search for accounts and videos"
                    value={searchValue} ref={inputRef}
                    onChange={handleInputChange}
                    onFocus={() => setShowResults(true)}
                />

                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClearSearch}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}


                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <Link to={`/search/user/${searchValue}`} state={searchValue} className={cx('search-btn')} onClick={handleHideSearch} onMouseDown={e => e.preventDefault()}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Link>
            </div>
        </HeadlessTippy>
    )
}

export default SearchInput