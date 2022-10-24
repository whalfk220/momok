import {
  useState
} from 'react'
import _ from 'lodash'

import {
  PopupContainer,
  PopupInner,
  PopupHeader,
  Title,
  CloseButton,
  PopupBody,
  SearchWrap,
  SearchKeywordInput,
  SearchBtn,
  SearchIcon,
} from '~/styles/restaurant/add/popup'

import SearchResult from './SearchResult'

const COMPANY_POS = {
  x: 37.50508329231284,
  y: 127.05549400986033,
}

const AddressPopup = ({
  Kakao,
  handlePopup,
  setPlace,
}) => {
  const [
    searchKeyword,
    setSearchKeyword,
  ] = useState('')
  const [
    searchResults,
    setSearchResults,
  ] = useState([])

  const handleClickCloseBtn = () => {
    handlePopup(false)
  }

  const handleSetPlace = place => {
    setPlace(place)
    handlePopup(false)
  }

  const handleKeyPressKeyword = e => {
    if (e.key === 'enter') {
      submitSearchKeyword()
    }
  }

  const submitSearchKeyword = async () => {
    const companyLocation = new Kakao.maps.LatLng(COMPANY_POS.x, COMPANY_POS.y)
    const places = new Kakao.maps.services.Places()
    const callback = (result, status) => {
      if (status !== Kakao.maps.services.Status.OK) {
        return
      }

      /**
       * 회사 위치 기준 반경 1km 이내 결과 필터링
       */
      const results = _.filter(result, place => (
        parseInt(place.distance, 10) < 1000
      ))

      console.log(results)
      setSearchResults(results)
    }

    places.keywordSearch(searchKeyword, callback, {
      location: companyLocation,
    })
  }

  return (
    <PopupContainer>
      <PopupInner>
        <PopupHeader>
          <Title>주소찾기</Title>
          <CloseButton
            onClick={handleClickCloseBtn}
          >×</CloseButton>
        </PopupHeader>
        <PopupBody>
          <SearchWrap>
            <SearchKeywordInput
              value={searchKeyword}
              placeholder="검색어를 입력해주세요"
              onChange={e => setSearchKeyword(e.target.value)}
              onKeyPress={handleKeyPressKeyword}
            />
            <SearchBtn
              onClick={submitSearchKeyword}
            >
              <SearchIcon icon="search" />
            </SearchBtn>
          </SearchWrap>
          {searchResults && <>
            {_.map(searchResults, result => (
              <SearchResult
                key={result.id}
                place={result}
                setPlace={handleSetPlace}
              />
            ))}
          </>}
        </PopupBody>
      </PopupInner>
    </PopupContainer>
  )
}

export default AddressPopup
