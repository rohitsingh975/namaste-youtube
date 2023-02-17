import React from 'react'
import Button from './Button';

const list = ["All","Gaming","Song","Live","Cricket","Soccer","News"];

const ButtonList = () => {

  return (
    <div className="flex">
    {
      list.map((buttonName) => {
        return <Button name={buttonName} />
      })
    }
    </div>
  )
}

export default ButtonList;