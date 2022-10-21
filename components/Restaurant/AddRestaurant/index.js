import {
  useRouter,
} from 'next/router'
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
import {
  axios,
} from '~/utils'

const AddRestaurantComponent = () => {
  const router = useRouter()

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
      name: 'popular_menu',
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
      options: [
        '안매워요',
        '매콤해요',
        '매워요',
      ],
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
    let notInputted = _.find(datas, d => !d.value.trim())
    if (notInputted) {
      alert(`${notInputted.title}를 입력해주세요`)
      return
    }

    let data = {}
    _.forEach(datas, d => {
      if (d.name === 'spicy') {
        let spicyIndex = _.findIndex(d.options, option => option === d.value)
        data[d.name] = spicyIndex + 1

        return
      }

      data[d.name] = d.value
    })

    let response
    try {
      response = await axios({
        method: 'POST',
        url: '/api/restaurant/restaurant',
        data,
      })

      alert('등록이 완료되었읍니다.')
    }
    catch (err) {
      alert('등록에 실패하였읍니다.')
      throw new Error(err)
    }

    router.back()
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
