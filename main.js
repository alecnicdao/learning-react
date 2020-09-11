// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// TODO
import React from 'react'
import ReactDOM from 'react-dom'

import {courses} from './courses'
import { CourseList } from './components/course-list'

class Main extends React.Component {
  render() {
    return <CourseList courses= {courses}/>
  }
}

ReactDOM.render(<Main/>, document.getElementById('main'))