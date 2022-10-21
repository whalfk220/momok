import {
  useState,
} from 'react'
import _ from 'lodash'

import {
  FormWrap,
  Label,
  Input,
  Select,
} from '~/styles/restaurant/add/form'

const Form = ({
  title,
  name,
  options,
  onHandleChangeData,
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

  return (
    <FormWrap>
      <Label htmlFor={name}>{title}</Label>
      {
        options ?
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
        :
        <Input
          name={name}
          id={name}
          value={value}
          onChange={handleChangeInput}
        />
      }
    </FormWrap>
  )
}

export default Form
