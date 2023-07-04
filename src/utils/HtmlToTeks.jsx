import {Parser} from 'html-to-react'
import PropTypes from 'prop-types'

const HtmlToTeks = ({teks}) => {
  return <>{Parser().parse(teks)}</>
}

HtmlToTeks.propTypes = {
    teks:PropTypes.string.isRequired
}
export default HtmlToTeks