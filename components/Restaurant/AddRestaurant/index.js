import {
  useState,
} from 'react'
import _ from 'lodash'

import {
  PageWrap,
  SubmitBtn,
} from '~/styles/restaurant/add'

import Header from './Header'
import Form from './Form'

const AddRestaurantComponent = () => {
  const [
    datas,
    setDatas,
  ] = useState([
    {
      order: 1,
      title: '식당이름',
      name: 'name',
      value: '',
    },
    {
      order: 2,
      title: '종류',
      name: 'type',
      options: [
        '양식', '한식', '일식',
        '중식', '퓨전', '기타',
      ],
      value: '',
    },
    {
      order: 3,
      title: '대표메뉴',
      name: 'popular-menu',
      value: '',
    },
    {
      order: 4,
      title: '주소',
      name: 'address',
      value: '',
    },
    {
      order: 5,
      title: '맵기',
      name: 'spicy',
      value: '',
    },
  ])

  const handleChangeData = (name, value) => {
    setDatas(oldDatas => {
      const target = _.find(oldDatas, data => data.name === name)
      const others = _.filter(oldDatas, data => data.name !== name)

      target.value = value

      const newDatas = _.sortBy(_.concat(target, others), 'order')

      return newDatas
    })
  }

  const handleSubmitData = async () => {
    const data = _.map(datas, d => ({
      name: d.name,
      value: d.value,
    }))

    let notInputted = _.find(datas, d => !d.value.trim())
    if (notInputted) {
      alert(`${notInputted.title}를 입력해주세요`)
      return
    }

    console.log(data)
    /**
     * TODO: 등록 및 성공 여부 별로
     * 1. 이전으로 이동
     * 2. 오류처리
     */
  }

  return (
    <PageWrap>
      <Header />
      {_.map(datas, data => (
        <Form
          key={data.name}
          title={data.title}
          name={data.name}
          options={data.options}
          onHandleChangeData={handleChangeData}
        />
      ))}
      <SubmitBtn onClick={handleSubmitData}>
        등록하고 달걀 받기
      </SubmitBtn>
    </PageWrap>
  )
}

export default AddRestaurantComponent
