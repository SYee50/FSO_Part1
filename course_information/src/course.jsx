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

export default Course