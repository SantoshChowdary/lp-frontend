import React, {useState, useEffect} from 'react'
import Loader from '../../../../Common/components/Loader'
import NoBookmarksPage from '../NoBookmarks'
import Bookmark from '../Bookmark'
import './index.css'

const Bookmarks = () => {
    const [bookmarksData, setBookmarksData] = useState<any[]>([])
    const [isBookmarksLoaded, setBookmarksLoadingStatus] = useState(true)

    const getBookmarksData = async () => {
        setBookmarksLoadingStatus(false)
    }

    useEffect(()=>{
        getBookmarksData()
    }, [])

    const updateBookmarkData = (id : any) => {
        setBookmarksData(bookmarksData.filter( (item : any) => item.bookmark_id !== id))
    }

  return (
        <div className="bookmarks-section">
            <p className='bookmarks-heading'>Bookmarks</p>
            {
                isBookmarksLoaded ? <Loader /> : (
                    <div>
                        {
                            (bookmarksData.length===0) ? <NoBookmarksPage /> : (
                                <ul className="bookmarks-list">
                                   {
                                    bookmarksData.map((item : any) => (
                                        <Bookmark key={item.bookmark_id} bookmarkData={item} updateBookmarkData={updateBookmarkData} />
                                    ))
                                   } 
                                </ul>
                            )
                        }
                    </div>
                )
            }
        </div>
  )
}

export default Bookmarks