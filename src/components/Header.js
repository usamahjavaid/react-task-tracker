import PropTypes from 'prop-types'
import Button from './Button'

const header = ({title}) => {

    const onClick = () => {
        console.log('click')

    }
  return (
    <header>

    <h1>{title}</h1>
    <Button text='add' color='green' onClick = {onClick}  />
    </header>
  )
}

header.defaultProps = { 
    title: 'Task Tracker'
  
  }
header.propTypes = {

    title: PropTypes.string.isRequired


}

export default header