import {
  useState,
} from 'react'
import _ from 'lodash'

import {
  FormWrap,
  Label,
  Input,
  Select,
  Button,
} from '~/styles/restaurant/add/form'

const Form = ({
  title,
  name,
  type,
  options,
  dataValue,
  onHandleChangeData,
  handlePopup,
}) => {
  const [
    value,
    setValue,
  ] = useState('')

  const handleChangeInput = e => {
    const value = e.target.value

    setValue(value)
    onHandleChangeData(name, value)
  }

  const handleChangeSelect = e => {
    const value = e.target.value

    setValue(value)
    onHandleChangeData(name, value)
  }

  const handleClickAddressBtn = () => {
    handlePopup(true)
  }

  return (
    <FormWrap>
      <Label htmlFor={name}>{title}</Label>
      {type === 'input' &&
        <Input
          name={name}
          id={name}
          value={value}
          onChange={handleChangeInput}
        />
      }
      {type === 'select' &&
        <Select
          name={name}
          id={name}
          value={value}
          onChange={handleChangeSelect}
        >
          <option hidden></option>
          {_.map(options, option => (
            <option
              key={option}
              value={option}
            >{option}</option>
          ))}
        </Select>
      }
      {type === 'address' &&
        <Button
          name={name}
          id={name}
          onClick={handleClickAddressBtn}
        >
          {dataValue.id ? dataValue.road_address_name : '주소 찾기'}
        </Button>
      }
    </FormWrap>
  )
}

export default Form
