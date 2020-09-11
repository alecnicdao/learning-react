import React from 'react'
import { Course } from './course'

export class CourseList extends React.Component {
    constructor(props){
        super(props)
        this.state = {courses: this.props.movies}
        this.sortCourses = this.sortCourses.bind(this)
    }

    sortCourses(sortingKey) {
        if(sortingKey === 'beginDate') {
            this.state.courses.sort((a, b) => a.beginDate - b.beginDate)
        } else {
            this.state.courses.sort((a, b) => a[sortingKey].localeCompare(b[sortingKey]))
        }

        this.setState({
            courses: this.state.courses
        })
    }

    render(){
      return (
        <div className="container">
          <header>
            <h1>Alastair Nicdao: Assignment 1</h1>
          </header>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>More</li>
            </ul>
            <button className="primary" onClick={() => {this.sortCourses('CRN')}}>CRN</button>
            <button className="primary" onClick={() => {this.sortCourses('semester')}}>Semester</button>
            <button className="primary" onClick={() => {this.sortCourses('beginDate')}}>Start Date</button>
          </nav>
          <main>
            {this.props.courses.map(c => {
              return <Course key={c.id} course={c}/>
            })}
          </main>
        </div>
      )
    }
  }