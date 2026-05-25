const Header = (props) => <h2>{props.course}</h2>

const Content = (props) => (
    <div>
        {props.parts.map(part => <Part part={part} />)}
    </div>
)

const Part = (props) => (
    <p>
        {props.part.name} {props.part.exercises}
    </p>
)

const Total = (props) => <h4>Total of {props.total} exercises</h4>

const Course = ({course}) => {
    console.log("course", course)
    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total total={course.parts.reduce(
                (sum, part) => sum + part.exercises, 0)} />        </>
    )
}

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    console.log("app", courses)
    return (
        <div>
            <h1>Web Development Curriculum</h1>
            {courses.map(course => <Course course={course} />)}
        </div>
    )
}

export default App